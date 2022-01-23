import React, { useState, useRef } from 'react'
import './Shuffle.scss'
import { TransitionLink } from './components/transitionLink/TransitionLink'

export const Shuffle = (props) => {
    const {
        heightCard = 300,
        widthCard = 400,
        items,
        children,
        loadAnimate
    } = props


    const [activeGroup, setActiveGroup] = useState(0)
    const [classes, setClasses] = useState([])
    const [offsetY, setOffsetY] = useState(0)
    const ref = useRef()
    const groups = ['All', ...new Set(items.map(items => items.group))]

    const handleGroupClick = (indexGroup) => {
        if (indexGroup === activeGroup)
            return

        const { y } = ref.current.getBoundingClientRect()

        setOffsetY(y)
        setActiveGroup(indexGroup)

        const classesTypes = {
            enter: [
                'enter left-enter',
                'enter right-enter',
                'enter bottom-enter',
            ],
            exit: [
                'exit left-exit',
                'exit right-exit',
                'exit bottom-exit',
            ]
        }

        const getRandomNumber = (lengthArray) => {
            return Math.floor(Math.random() * lengthArray)
        }

        const arrayClasses = items.map(({ index }) => {
            return (
                {
                    index: index,
                    enter: classesTypes.enter[getRandomNumber(classesTypes.enter.length)],
                    exit: classesTypes.exit[getRandomNumber(classesTypes.exit.length)]
                }
            )
        })
        setClasses(arrayClasses)
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

    return (
        <div
            className="shuffle"
            style={{
                '--heightCard': `${heightCard}px`,
                '--widthCard': `${widthCard}px`,
                '--offsetY': `${offsetY}px`,
            }}
        >


            <TransitionLink
                groups={groups}
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                handleGroupClick={handleGroupClick}
            />

            <div
                className="gallery"
                ref={ref}
            >
                {items.map(({ index, group, ...props }) => {
                    const itemClass = classes.filter(el => el.index === index)

                    return (
                        <div
                            key={index}
                            className={
                                activeGroup === 0
                                    ? 'shuffle-card enter scale-enter'
                                    : group === groups[activeGroup]
                                        ? 'shuffle-card scale-enter ' + itemClass[0].enter
                                        : 'shuffle-card ' + itemClass[0].exit
                            }
                            style={{
                                animationPlayState: loadAnimate ? 'running' : 'paused',

                            }}
                        >
                            {childrenWithProps({ index, group, ...props })}
                        </div>
                    )

                })}
            </div>
        </div >
    );
}
