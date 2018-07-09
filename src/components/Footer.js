import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        let footerPath = window.location.hash.split('/'),
            indexLink = <Link to="/index" className="index-link page-link">Index</Link>;

            if (footerPath[1] === 'slider') {
                console.log(footerPath[2]);
            indexLink = <Link to={"/index/" + footerPath[2]} className="index-link index-link_slider page-link">{footerPath[2].replace(/_/g, ' ')}</Link>;
        }
        if (footerPath[1] === 'project-info') {
            console.log(footerPath[2]);
            // indexLink = <Link to={"/index/" + footerPath[2]} className="index-link index-link_slider page-link">{footerPath[2].replace(/_/g, ' ')}</Link>;
        }

        return (
            <footer className="footer wrapper">
                {indexLink}
                <Link to="/contact" className="contact-link page-link">Contact</Link>
                
            </footer>
        );
    }
}

export default Footer;