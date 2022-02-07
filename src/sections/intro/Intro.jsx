import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Intro.scss'
import { Button } from '../../components/button/Button'
export const Intro = (props) => {
    const { onClick } = props
    return (
        <div className="intro flex column">
            <p>Привет! Я Антипов Василий,</p>
            <p>фронтенд разработчик</p>
            <Button
                onClick={onClick}
                className="primary scroll-btn"
            >
                Мои работы
                <ArrowForwardIcon
                    className="icon"
                />
            </Button>
        </div >
    )
}
