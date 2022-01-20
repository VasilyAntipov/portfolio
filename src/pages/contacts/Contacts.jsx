import React from 'react'
import { Heading } from '../../components/heading/Heading'

export const Contacts = ({ className }) => {
    return (
        <div
            className={`contacts ${className}`}
        >
            <Heading
                head="CONTACTS"
                className="heading"
            />
        </div>
    )
}
