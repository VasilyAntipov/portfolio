import React from 'react'
import { Hexagon } from '../../components/hexagon/Hexagon';
import Graph from '../../components/graph';
import { Heading } from '../../components/heading/Heading';
import { motion } from 'framer-motion'
import './About.scss'
export const About = (props) => {
    const { hexagonItems, graphItems } = props
    return (
        <div className="about" >
            <Heading
                head="ИНФОРМАЦИЯ"
                className="heading"
            />

            <div className="about-first flex">
                {hexagonItems.map((item, index) => (
                    <motion.div
                        className="quality"
                        key={index}
                        transition={{ duration: 1, delay: (0.5 + (index + 1) * 0.3) }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Hexagon
                            head={item.head}
                            text={item.text}
                            size={250}
                            frontFill="#04c2c9"
                            backFill="tomato"
                            frontContent={<h3>{item.head} </h3>}
                            backContent={item.text}
                        >
                        </Hexagon>
                    </motion.div>

                ))}
            </div>
            <div className="about-next flex">
                <motion.div
                    className="photo"
                    initial={{ x: -300, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Hexagon
                        size={350}
                        frontFill='url(/phoenix.jpeg)'
                        backFill="tomato"
                        backContent={
                            'I am a frontend developer. I like the development of animated components, responsive design. I know a little backend, I know how to work in databases, but I focus on Javascript framework React'
                        }
                    />
                </motion.div>
                <div className="graph-wrapper">
                    <Graph
                        className="graph"
                        items={graphItems}
                        transition={{ duration: 1, delay: 0.8 }}
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </div>
    )
}
