import React, { useState } from 'react'
import './Card.scss'
import {Button} from '../button/Button'

export const Card = (props) => {
    const { image, name, text, link, groups, setModalData, slides, index, git } = props
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
                <p className="group">{groups.join(',')}</p>
            </div>

            <div
                className={"card__button__wrapper " + (isActive ? 'active' : '')}
            >
                <Button
                    className="secondary"
                    onClick={() => {
                        setModalData({ slides, text, link, name, git })
                    }}
                >
                    Узнать больше
                </Button>

            </div>
        </div>
    )
}
