import React from 'react'
import './Modal.scss'
import { Slider } from '../slider/Slider';
import { CSSTransition } from 'react-transition-group'
export const Modal = (props) => {
    const { modalData, setModalData } = props

    const slidesArray =
        modalData
            ? modalData.slides.map(item => {
                return {
                    url: `./${item}`,
                    childrenElem: <div></div>
                }
            })
            : []

    return (

        <div
            className={"modal-wrapper flex " + (modalData ? 'show' : '')}

            onClick={(e) => {
                if (e.target.id === 'modal-mask') {
                    setModalData(null)
                }
            }}
        >
            <div
                className="modal-mask"
                id="modal-mask"
            ></div>
            <div
                className={"modal " + (modalData ? 'show' : '')}
            >

                <div className="carousel">
                    <Slider
                        slides={slidesArray}
                        buttonShape="square"
                    />
                </div>
                {modalData &&
                    <div className="modal-content">
                        <h1 className="modal-head">{modalData.name}</h1>
                        <div className="modal-text">{modalData.text}</div>
                        <button className="modal-button"
                            onClick={() => {
                                window.open(modalData.link);
                            }}

                        >View Site</button>
                        <button className="modal-button git"
                            onClick={() => {
                                window.open(modalData.link);
                            }}

                        >View Git</button>
                    </div>
                }
            </div>
        </div>
    )
}
