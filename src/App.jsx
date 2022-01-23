import React, { useState } from 'react'
import './App.scss'
import { Navbar } from './components/navbar/Navbar';
import { scrollTo } from './utilities/scrollTo/scrollTo';
import { Intro } from './sections/intro/Intro';
import { About } from './sections/about/About';
import { Portfolio } from './sections/portfolio/Portfolio'
import { Contacts } from './sections/contacts/Contacts';
import { Modal } from './components/modal/Modal'

export default function App() {

    const hexagonItems = [
        { head: 'Personal qualities', text: `Fast learn new directions in programming, workteam, responsiveness` },
        { head: 'Adaptive', text: `Experience in adaptive and cross-browser layout` },
        { head: 'OOP knowledge', text: `Understanding of design principles, object oriented programming` },
        { head: 'Rest/Websocket', text: `Understanding client-server interaction (WebSocket, REST)` }
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
        { name: ' UI/UX design', skill: '80%' },
        { name: ' Node.js', skill: '65%' },
        { name: ' Express', skill: '65%' },
        { name: ' Postgre/MSSQL', skill: '50%' },
    ]

    const projects = [
        {
            index: 1,
            group: 'React',
            name: 'Online-shop',
            image: '/slide-shop1.png',
            text: 'Fullstack e-shop developed on frontend: React, Redux, Sagas, Material-ui design, backend:  nodeJS, expressJS, PostgreSQL, sequelize.js. Contains verification using tokens, admin panel, pagination, etc.',
            link: 'https://shop.froggy.pw',
            slides: ['slide-shop1.png', 'slide-shop2.png', 'slide-shop3.png'],
        },
        {
            index: 2,
            group: 'JavaScript',
            name: 'Chess',
            image: '/slide-chess3.png',
            text: 'Chessmate client on VanillaJS,logical and mathematical calculations',
            link: 'https://chess.froggy.com',
            slides: ['slide-chess1.png', 'slide-chess2.png', 'slide-chess3.png']
        },
        {
            index: 3,
            group: 'Next',
            name: 'ShortLink',
            // image: '/shorts-slide1.png',
            text: 'ShortLink',
            link: 'https://shorts.froggy.com',
            slides: ['slide-shorts1.png', 'slide-shorts2.png', 'slide-shorts3.png']
        },
        {
            index: 4,
            group: 'React',
            name: 'Portfolio',
            image: '/slide-portfolio1.png',
            text: 'Chess',
            link: 'https://froggy.com',
            slides: ['slide-portfolio2.png', 'slide-portfolio3.png']
        },
        {
            index: 5,
            group: 'React',
            name: 'Films',
            // image: '/slide-films.png',
            text: 'Test',
            link: 'https://vk.com',
            slides: ['slide-films1.png', 'slide-films2.png', 'slide-films3.png']
        },
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

