import React, { useState } from 'react'
import './Card.scss'

export const Card = (props) => {
    const { image, name, text, link, group, setModalData, slides, index, git } = props
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
                style={{ backgroundImage: image ? `url(${image})` : 'url(https://picsum.photos/300/400)' }}
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
                        setModalData({ slides, text, link, name, git })
                    }}
                >
                    See more
                </button>

            </div>
        </div>
    )
}
