import React from 'react'
import { Hexagon } from '../../components/hexagon/Hexagon';
import Graph from '../../components/graph';
import './About.scss'
import { Heading } from '../../components/heading/Heading';

export const About = (props) => {
    const { className, hexagonItems, graphItems } = props
    return (
        <div className={className} >
            <Heading
                head="ABOUT"
                className="heading"
            />
            <div className="about-first">
                {hexagonItems.map((item, index) => (
                    <Hexagon
                        className="quality"
                        key={index}
                        head={item.head}
                        text={item.text}
                        transition={{ duration: 1, delay: (0.5 + (index + 1) * 0.3) }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        size={100}
                        styleIn={{ backgroundColor: 'rgb(105, 209, 223)' }}
                        styleOut={{ padding: '25px', width: '250px' }}
                    />

                ))}
            </div>
            <div className="about-next">
                <Hexagon
                    className="photo"
                    initial={{ x: -300, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    size={300}
                    styleIn={{ backgroundImage: 'url(http://placekitten.com/360/360)' }}
                    styleOut={{ width: '300px' }}
                    text={'I am a frontend developer. I like the development of animated components, responsive design. I know a little backend, I know how to work in databases, but I focus on Javascript framework React'}
                />
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
    )
}
