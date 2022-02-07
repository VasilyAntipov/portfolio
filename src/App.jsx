import React, { useState } from 'react'
import './App.scss'
import { Navbar } from './components/navbar/Navbar';
import { scrollTo } from './utilities/scrollTo/scrollTo';
import { Intro } from './sections/intro/Intro';
import { About } from './sections/about/About';
import { Portfolio } from './sections/portfolio/Portfolio'
import { Contacts } from './sections/contacts/Contacts';
import { Modal } from './components/modal/Modal'
import {projects, links, hexagonItems, graphItems} from '../src/data/index'

export default function App() {



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
                <div className="intro-wrapper">
                    <Intro
                        onClick={() => scrollTo('about-wrapper')}
                    />
                </div>
                <div className="navbar-wrapper">
                    <Navbar
                        links={links}
                    />
                </div>
                <div className="about-wrapper">
                    <About
                        hexagonItems={hexagonItems}
                        graphItems={graphItems}
                    />
                </div>
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

