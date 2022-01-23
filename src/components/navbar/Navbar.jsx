import React from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import { scrollTo } from '../../utilities/scrollTo/scrollTo'

export const Navbar = ({ className, links, ...props }) => {

    return (
        <motion.div
            className={'navbar ' + className}
            transition={{ duration: 0.1, delay: 0.5, ease: 'linear' }}
            initial={{ height: 0 }}
            whileInView={{ height: '50px', borderBottom: '3px solid #04c2c9' }}
            viewport={{ once: true }}
        >
            <motion.div className="links"
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                initial={{ fontSize: 0 }}
                whileInView={{ fontSize: '1.2rem' }}
                viewport={{ once: true }}
            >
                {links.map((el, index) => (
                    <motion.div
                        className='link'
                        key={el.to}
                        onClick={() => scrollTo(el.to)}
                        initial={{ fontSize: 0 }}
                        transition={{ duration: '0.6', delay: index * 0.3  }}
                        whileInView={{ fontSize: '1.2rem' }}
                        viewport={{ once: true }}
                    >
                        {el.text}
                    </motion.div>
                ))}

            </motion.div>
        </motion.div >
    )
}
