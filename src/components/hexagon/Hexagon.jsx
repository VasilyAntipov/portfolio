import React from 'react'
import './Hexagon.scss'
import { motion } from 'framer-motion'

export const Hexagon = ({ text, head, size, styleIn, styleOut, className, ...props }) => {

    return (
        <motion.div
            className={"hex-wrapper " + className}
            style={{ ...styleOut }}
            {...props}
        >
            <div
                className="hexagon"
                style={{ height: size, width: size * 2 }}
            >
                <div className="hexagon-in1">
                    <div className="hexagon-in2"
                        style={styleIn}
                    >
                    </div>
                </div>
            </div>
            {(text || head) && (
                <div className="hex-text"
                >
                    <h1>{head}</h1>
                    <p>{text}</p>
                </div>
            )}
        </motion.div>
    )
}
