import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer wrapper">
                <Link to="/index" className="index-link">Index</Link>
                <Link to="/contact" className="contact-link">Contact</Link>
            </footer>
        );
    }
}

export default Footer