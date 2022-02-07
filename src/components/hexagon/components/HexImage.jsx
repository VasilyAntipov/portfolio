import React from 'react';

import './HexImage.scss'
export const HexImage = (props) => {
    const { background } = props
    return (
        <div className="hexagon hexagon1">
            <div className="hexagon-in1">
                <div className="hexagon-in2"
                    style={{
                        background: `${background}`,
                        backgroundSize: 'cover'
                    }}
                >
                </div>
            </div>
        </div>
    )
};
