import React, { useState } from 'react'
import { Line } from './components/line/Line'
import { motion } from 'framer-motion'

const Graph = ({ className, items, ...props }) => {
    const [loadGraph, setLoadGraph] = useState(false)
    return (
        <motion.div
            onAnimationComplete={() => setLoadGraph(true)}
            className={className}
            {...props}
        >
            {
                items.map((el, ) => (
                    <Line
                        key={el.name}
                        lang={el.name}
                        skill={el.skill}
                        load={loadGraph}
                    />
                ))
            }
        </motion.div>
    )
}

export default Graph