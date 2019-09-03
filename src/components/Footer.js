import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        let footerPath = window.location.hash.split('/'),
            indexLink = <Link to="/index" className="index-link page-link">Index</Link>,
            contactLink = <Link to="/contact" className="index-link index-link_contact page-link">Contact</Link>

        if (footerPath[1] === 'slider') {
            indexLink = <Link to={"/index/" + footerPath[2]} className="index-link index-link_slider page-link">{footerPath[2].replace(/_/g, ' ')}</Link>;
            contactLink = <Link to="/index" className="index-link hidden index-link_contact page-link"></Link>;
        }
        if (footerPath[1] === 'index') {
            contactLink = <Link to="/index" className="index-link hidden page-link"></Link>;
            indexLink = <Link to={"/index/" + footerPath[2]} className="index-link hidden index-link_slider page-link"></Link>;
        }

        return (
            <footer className={"footer wrapper " + (footerPath[1] === 'slider' ? 'footer_slider' : '')}>
                {indexLink}
                {contactLink}
            </footer>
        );
    }
}

export default Footer;