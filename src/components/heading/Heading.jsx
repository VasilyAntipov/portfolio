import React from 'react'
import { motion } from 'framer-motion'
import './Heading.scss'
export const Heading = ({ head, className }) => {
    return (
        <div className={"head-component " + className}>
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >{head}
            </motion.div>
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
            > ___
            </motion.div>

        </div >
    )
}
