import React from 'react'
import './Line.scss'
export const Line = ({ lang, skill, load, ...props }) => {
    return (
        <div
            className="line"
        >
            <div className="lang flex">{lang}</div>
            <div
                className="skill-container"
            >
                <div
                    className="lang-skill"
                    style={{ width: load ? skill : 0 }}
                >
                </div>
                <div className="skill">{skill}</div>
            </div>
        </div>
    )
}
