import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        let footerPath = window.location.hash.split('/'),
            indexLink = <Link to="/index" className="index-link">Index</Link>;

        if (footerPath[1] === 'slider') {
            indexLink = <Link to={"/index/" + footerPath[2]} className="index-link">{footerPath[2].replace(/_/g, ' ')}</Link>;
        }

        return (
            <footer className="footer wrapper">
                {indexLink}
                <Link to="/contact" className="contact-link">Contact</Link>
            </footer>
        );
    }
}

export default Footer;