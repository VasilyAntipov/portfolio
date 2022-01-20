import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Intro.scss'
export const Intro = (props) => {
    const { className, onClick } = props
    return (
        <div className={className}>
            <div className="flex">
                <p>
                    Привет! Меня зовут Антипов Василий, я full-stack разработчик.
                </p>
                <button
                    className="btn-scroll"
                    onClick={onClick}
                >
                    Посмотреть работы
                    <ArrowForwardIcon
                        className="icon"
                    />
                </button>
            </div>
        </div>
    )
}
