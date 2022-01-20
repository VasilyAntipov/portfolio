import React, { useState } from 'react'
import './App.scss'
import { Navbar } from './components/navbar/Navbar';
import { scrollTo } from './utilities/scrollTo/scrollTo';
import { Intro } from './pages/intro/Intro';
import { About } from './pages/about/About';
import { Portfolio } from './pages/portfolio/Portfolio'
import { Contacts } from './pages/contacts/Contacts';
import { Modal } from './components/modal/Modal'

export default function App() {

    const hexagonItems = [
        { head: 'Fast', text: `Fast load times and lag free interaction, my highest priority.` },
        { head: 'Responsive', text: `My layouts will work on any device, big or small.` },
        { head: 'Intuitive', text: `Strong preference for easy to use, intuitive UX/UI.` },
        { head: 'Fast', text: `Websites don't have to be static, I love making pages come to life.` }
    ]

    const links = [
        { to: 'intro', text: 'HOME' },
        { to: 'anchorAbout', text: 'ABOUT' },
        { to: 'portfolio', text: 'PORTFOLIO' },
        { to: 'contacts', text: 'CONTACTS' },
    ]

    const graphItems = [
        { name: ' CSS', skill: '90%' },
        { name: ' HTML', skill: '90%' },
        { name: ' JavaScript', skill: '80%' },
        { name: ' React', skill: '80%' },
        { name: ' Redux', skill: '80%' },
        { name: ' NextJS', skill: '80%' },
        { name: ' UI/UX', skill: '80%' },
        { name: ' AnimateJS/Framer', skill: '80%' },
        { name: ' Node.js', skill: '65%' },
        { name: ' Express', skill: '65%' },
        { name: ' Postgre/MSSQL', skill: '50%' },
    ]
    
    const projects = [
        {
            index: 1,
            group: 'React',
            name: 'asdasd',
            image: '/thumb3.jpg',
            text: 'Shop',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 2,
            group: 'JavaScript',
            name: 'Films',
            image: '/thumb4.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae!',
            link: 'https://vk.com',
            slides: ['slide2.jpg', 'slide3.jpg', 'slide4.jpg']
        },
        {
            index: 3,
            group: 'Next',
            name: 'ShortLink',
            image: '/thumb5.jpg',
            text: 'ShortLink',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 4,
            group: 'React',
            name: 'Chess',
            image: '/thumb1.jpg',
            text: 'Chess',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 5,
            group: 'JavaScript',
            name: 'Test',
            image: '/thumb2.jpg',
            text: 'Test',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 6,
            group: 'Next',
            name: 'react1',
            image: '/thumb6.jpg',
            text: 'react1',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 7,
            group: 'React',
            name: 'react2',
            image: '/thumb7.jpg',
            text: 'react2',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 8,
            group: 'React',
            name: 'SSR',
            image: '/thumb8.jpg',
            text: 'SSR',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        },
        {
            index: 9,
            group: 'Next',
            name: 'SSR1',
            image: '/thumb9.jpg',
            text: 'SSR1',
            link: 'https://vk.com',
            slides: ['slide1.jpg', 'slide1.jpg', 'slide1.jpg']
        }
    ]

    const [modalData, setModalData] = useState(null)

    return (

        <div className="app"
        >
            <Modal
                modalData={modalData}
                setModalData={setModalData}
                items={projects}
            />
            <div className="main">
                <Intro
                    className="intro flex"
                    onClick={() => scrollTo('anchorAbout')}
                />
                <div className="anchorAbout"></div>
                <Navbar
                    className="navbar-wrapper"
                    links={links}
                />
                <About
                    className="about"
                    hexagonItems={hexagonItems}
                    graphItems={graphItems}
                />

                <div className="portfolio-wrapper">
                    <Portfolio
                        items={projects}
                        setModalData={setModalData}
                    />
                </div>
                <Contacts

                />
            </div>
        </div >
    );
}

