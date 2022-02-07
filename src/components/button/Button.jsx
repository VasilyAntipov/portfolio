import React from 'react';
import './Button.scss'

export const Button = ({ className = '', children, onClick }) => {
    return <button
        className={"animate-button " + className}
        onClick={onClick}
    >
        {children}
    </button>
};
