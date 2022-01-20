import React, { useState } from 'react'
import './Card.scss'

export const Card = (props) => {
    const { image, name, text, link, group, setModalData, slides, index } = props
    const [isActive, setIsActive] = useState(false)

    return (
        <div
            className="card"
            onMouseEnter={() => {
                setIsActive(true)
            }}
            onMouseLeave={() => {
                setIsActive(false)
            }}
        >
            <div
                className={'card__inner ' + (isActive ? 'active' : '')}
                style={{ backgroundImage: `url(${image})` }}
            >
            </div >

            <div
                className={'card__text ' + (isActive ? 'active' : '')}
            >
                <p className="name">{name}</p>
                <p className="group">{group}</p>
            </div>

            <div
                className={"card__button__wrapper " + (isActive ? 'active' : '')}
            >
                <button
                    className="card__button"
                    onClick={() => {
                        setModalData({ slides, text, link, name })
                    }}
                >
                    Узнать больше
                </button>
            </div>
        </div>
    )
}
