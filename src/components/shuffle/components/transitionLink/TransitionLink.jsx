import React, { useState, useRef, useEffect, useLayoutEffect, } from 'react'
import './TransitionLink.scss'
import useResizeObserver from '@react-hook/resize-observer'
import { motion } from 'framer-motion'

const useSize = (target) => {
    const [size, setSize] = useState()

    useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

export const TransitionLink = (props) => {
    const { groups, activeGroup = 0, handleGroupClick} = props

    const ref = useRef(null)
    const [style, setStyle] = useState({})

    const size = useSize(ref)


    useEffect(() => {
        setStyle({
            left: ref.current.childNodes[activeGroup].offsetLeft,
            width: ref.current.childNodes[activeGroup].clientWidth
        })
    }, [size, activeGroup])



    return (
        <motion.div
            className="links-wrapper"
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1}}
            viewport={{ once: true }}
        >
            <div
                className="links"
            >
                <div className="slider"
                    style={style}
                ></div>
                <div
                    className="buttons"
                    ref={ref}
                >
                    {groups.map((item, index) => (
                        <div
                            key={item}
                            className={index === activeGroup ? 'button active' : 'button'}
                            onClick={(e) => {
                                setStyle({
                                    left: ref.current.childNodes[0].offsetLeft,
                                    transform: `translate(${e.target.offsetLeft - ref.current.childNodes[0].offsetLeft}px, 0)`,
                                    width: e.target.clientWidth,
                                })
                                handleGroupClick(index)
                            }}
                        >
                            {item.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
