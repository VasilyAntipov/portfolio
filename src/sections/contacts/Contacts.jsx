import React from 'react'
import { Heading } from '../../components/heading/Heading'
import { Mailer } from '../../components/mailer/Mailer'
import "./Contacts.scss"

export const Contacts = ({ className }) => {

    return (
        <div
            className="contacts"
        >
            <Heading
                head="CONTACTS"
                className="heading"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 102"
                style={{ height: 75, width: '100%' }}
                preserveAspectRatio='none'
            >
                <path d="M0 0 L50 100 L100 0 Z" fill="#F5F5F5" stroke="white"></path>
            </svg>
            <div className="mailer-wrapper">
                <Mailer />
            </div>
        </div>
    )
}
