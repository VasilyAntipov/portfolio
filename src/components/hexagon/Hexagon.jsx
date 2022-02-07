import React, { useState } from 'react'
import './Hexagon.scss'
import { motion } from 'framer-motion'
import { HexImage } from './components/HexImage'
export const Hexagon = ({ frontContent, backContent, size = 250, frontFill, backFill, ...props }) => {
    const [showBackward, setShowBackward] = useState(false)

    const handleClick = () => {
        setShowBackward(old => !old)
    }
    return (
        <div
            className={"hex-wrapper flex"}
            {...props}
            style={{ '--size': `${size}px` }}
            onClick={handleClick}
        >

            <div
                className="front"
                style={showBackward ? { transform: 'rotateY(-180deg)' } : {}}
            >
                <HexImage
                    background={frontFill}
                />
                <div className="front-content">
                    {frontContent}
                </div>
            </div>
            <div className="back"
                style={showBackward ? { transform: 'rotateY(0deg)', } : {}}
            >
                <HexImage

                    background={backFill}
                />
                <div className="back-content" style={
                    showBackward
                        ? {
                            opacity: 1,
                            transitionProperty: 'opacity',
                            transitionDuration: '0.5s',
                            transitionDelay: '0.5s',
                            transitionTimingFunction: 'ease-in-out',
                        }
                        : {}}
                >
                    {backContent}
                </div>
            </div>
        </div >
    )
}
