import React, { useState, useRef, useEffect, useLayoutEffect, } from 'react'
import './Shuffle.scss'
import { TransitionLink } from './components/transitionLink/TransitionLink'
import { ShuffleCard } from './ShuffleCard'
import useResizeObserver from '@react-hook/resize-observer'

export const Shuffle = (props) => {
    const {
        heightCard = 300,
        widthCard = 400,
        items,
        children,
        loadAnimate
    } = props


    const maskRef = useRef()
    const galleryRef = useRef(null)
    const [activeGroup, setActiveGroup] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const filters = [...new Set(items.flatMap(({ groups }) => groups))]
    const [coordinates, setCoordinates] = useState(Array(items.length).fill({ top: 0, left: 0 }))


    const useSize = (target) => {
        const [size, setSize] = useState()

        useLayoutEffect(() => {
            setSize(target.current.getBoundingClientRect())
        }, [target])

        useResizeObserver(target, (entry) => setSize(entry.contentRect))
        return size
    }
    const size = useSize(maskRef)

    const getCoordinates = (arr, filter, maskParent, galleryParent) => {
        const result = arr.map((item, index) => {
            if (item.groups.find(elem => elem === filter))
                return {
                    top: maskParent.children['maskCard' + index].getBoundingClientRect().top - maskParent.getBoundingClientRect().top + 'px',
                    left: maskParent.children['maskCard' + index].getBoundingClientRect().left - maskParent.getBoundingClientRect().left + 'px',
                }
            else {
                return {
                    top: galleryParent.children['shuffleCard' + index].getBoundingClientRect().top - galleryParent.getBoundingClientRect().top + 'px',
                    left: galleryParent.children['shuffleCard' + index].getBoundingClientRect().left - galleryParent.getBoundingClientRect().top + 'px',
                }
            }
        })
        setCoordinates(result)
    }

    useEffect(() => {
        const maskParent = maskRef.current
        const galleryParent = galleryRef.current
        getCoordinates(items, filters[activeGroup], maskParent, galleryParent)
    }, [activeGroup, size])

    const handleGroupClick = (indexGroup) => {
        if (indexGroup === activeGroup)
            return

        const { y } = maskRef.current.getBoundingClientRect()
        setOffsetY(y)
        setActiveGroup(indexGroup)
    }

    const childrenWithProps = (props) => {
        return (
            React.Children.map(children,
                (child, index) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ...props
                        })
                    }
                }
            ))
    }

    const maskItems = items.map(({ groups }, index) => {
        if (groups.find(elem => elem === filters[activeGroup]))
            return (
                <div
                    id={'maskCard' + index}
                    key={index}
                    className={'card-mask hidden'}
                >
                </div>
            )
    })

    const cardItems = items.map(({ groups, ...props }, index) => {
        const elemIsVisible = groups.find(elem => elem === filters[activeGroup])
        if (elemIsVisible) {
            return (
                <ShuffleCard
                    id={'shuffleCard' + index}
                    key={index}
                    className='shuffle-card'
                    style={{
                        transition: 'all 1s ease-in-out',
                        left: coordinates[index].left,
                        top: coordinates[index].top,
                    }}
                >
                    {childrenWithProps({ index, groups, ...props })}
                </ShuffleCard >
            )
        } else {
            return (
                <ShuffleCard
                    id={'shuffleCard' + index}
                    key={index}
                    className='shuffle-card'
                    style={{
                        transition: 'all 1s ease-in-out',
                        transform: 'scale(0)',
                        opacity: '0',
                        left: coordinates[index].left,
                        top: coordinates[index].top,
                    }}
                >
                </ShuffleCard >
            )
        }
    })

    return (
        <div
            className="shuffle flex"
            style={{
                '--heightCard': `${heightCard}px`,
                '--widthCard': `${widthCard}px`,
            }}
        >
            <TransitionLink
                filters={filters}
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                handleGroupClick={handleGroupClick}
            />
            <div className="gallery-container">
                <div
                    className="gallery"
                    ref={galleryRef}
                >
                    {cardItems}
                </div>
                <div
                    className="gallery-mask"
                    ref={maskRef}
                >
                    {maskItems}
                </div>
            </div>
        </div >
    );
}

