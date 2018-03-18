import React from 'react';
import Mailto from 'react-mailto.js';

class Contact extends React.Component {
    render() {
        return (
            <main className="contact wrapper">
                <div className="contact-box">
                    <p className="contact-box__heading">CONTACT FOR FURTHER INQUIERES</p>
                    <Mailto
                        className="contact-box__email"
                        secure={true}
                        to='info@evgeniypavlov.com'
                    >
                        info@evgeniypavlov.com
                    </Mailto>
                </div>
            </main>
        );
    }
}

export default Contact