import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <header className="header wrapper">
                <Link to="/" className="home-link">Evgeniy Pavlov</Link>
                <Link to="/info" className="info-link">Info</Link>
            </header>
        );
    }
}

export default Header