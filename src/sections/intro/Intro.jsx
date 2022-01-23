import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Intro.scss'
export const Intro = (props) => {
    const { className, onClick } = props
    return (
        <div className={className}>
            <div className="flex">
                <p style={{
                    paddingBottom: 15,
                }}>
                Hello! I'm Antipov Vasily, frontend developer
            </p>
            <button
                className="btn-scroll"
                onClick={onClick}
            >
                My works
                <ArrowForwardIcon
                    className="icon"
                />
            </button>
        </div>
        </div >
    )
}
