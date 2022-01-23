import React, { useState } from 'react'
import { Heading } from '../../components/heading/Heading'
import './Portfolio.scss'
import {Shuffle} from '../../components/shuffle/Shuffle'
import { motion } from 'framer-motion'
import { Card } from '../../components/card/Card'

export const Portfolio = ({ items, setModalData }) => {

    const [loadAnimate, setLoadAnimate] = useState(false)

    return (
        <div className="portfolio">
            <motion.div
                onViewportEnter={() => {
                    setLoadAnimate(true)
                }}
            >
                <Heading
                    head="PORTFOLIO"
                    className="heading"
                />
                <div className="carousel-wrap">
                    <Shuffle
                        loadAnimate={loadAnimate}
                        items={items}
                        widthCard={400}
                        heightCard={300}
                    >
                        <Card
                            setModalData={setModalData}
                        />
                    </Shuffle>
                </div>
            </motion.div>

        </div >
    )
}
