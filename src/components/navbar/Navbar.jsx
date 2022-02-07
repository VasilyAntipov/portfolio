import React, { useState } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import { scrollTo } from '../../utilities/scrollTo/scrollTo'
import { ReactComponent as Menu } from './images/Menu.svg';

export const Navbar = ({ links, ...props }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div
            className={showMenu ? "navbar long" : "navbar"}
        >
            <motion.div className={showMenu ? "links show" : "links hidden"}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                initial={{ fontSize: 0 }}
                whileInView={{ fontSize: '1.2rem' }}
                viewport={{ once: true }}
            >
                {links.map((el, index) => (
                    <motion.div
                        className='link'
                        key={el.to}
                        onClick={() => {
                            setShowMenu(false)
                            scrollTo(el.to)
                        }}
                        initial={{ fontSize: 0 }}
                        transition={{ duration: '0.6', delay: index * 0.3 }}
                        whileInView={{ fontSize: '1.2rem' }}
                        viewport={{ once: true }}
                    >
                        {el.text}
                    </motion.div>
                ))}
            </motion.div>
            <div className="menu-button">
                <Menu
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    fill={"white"}
                    onClick={() => {
                        setShowMenu(show => !show)
                    }}
                />
            </div>
            <div className="border"></div>
        </div >
    )
}
