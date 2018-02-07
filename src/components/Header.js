import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        let headerPath = window.location.hash.split('/'),
            goBack = function (e){
                e.preventDefault();
                window.history.back();
            },
            homeLink = <Link to="/" className="home-link">Evgeniy Pavlov</Link>,
            infoLink = <Link to="/info" className="info-link">Info</Link>,
            backLink = <Link to="/info" onClick={goBack} className="info-link">Back</Link>;

        if (headerPath[1] === 'index') {
            homeLink = backLink;
            infoLink = '';
        }
        return (
            <header className="header wrapper">
                {homeLink}
                {infoLink}
            </header>
        );
    }
}

export default Header;