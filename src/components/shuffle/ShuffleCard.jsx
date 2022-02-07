import React, { useRef, useState, useEffect } from 'react';

export const ShuffleCard = ({ id, onClick, className, children, style }) => {


 

    return <div
        id={id}
        className={className}
        onClick={onClick}
        style={style}
    >
        {children}
    </div>;
};
