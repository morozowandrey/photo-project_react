import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        let headerPath = window.location.hash.split('/'),
            goBack = function (e){
                e.preventDefault();
                window.history.back();
            },
            homeLink = <Link to="/" className="home-link page-link">Evgeniy Pavlov</Link>,
            infoLink = <Link to="/info" className="info-link page-link">Info</Link>,
            projectInfoLink = <Link to="/project-info" className="info-link page-link">Project Info</Link>,
            backLink = <Link to="/info" onClick={goBack} className="info-link page-link">Back</Link>;

        if (headerPath[1] === 'index') {
            homeLink = backLink;
            infoLink = '';
        }
        if (headerPath[1] === 'slider') {
            infoLink = projectInfoLink;
        }
        if (headerPath[1] === 'project-info') {
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