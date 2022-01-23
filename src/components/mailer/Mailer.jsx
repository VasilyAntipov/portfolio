import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Mailer.scss'
export const Mailer = () => {
    const id = process.env.REACT_APP_ID_MAILER
    const [state, handleSubmit] = useForm(id);
    if (state.succeeded) {
        return <p
            style={{
                color: 'white',
                fontSize: '1.3rem',
                
            }}
        >
            Thanks for joining!</p>;
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="mailer"
        >
            <div className="label">Have a question or want to work together?</div>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder='Your Message'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div className='button-wrapper'>
                <button
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}


