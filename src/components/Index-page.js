import React from 'react';

import ImageItem from './index-project';
import { IndexProjectsToLoad } from '../imgs';

class Index extends React.Component {

    state = {
        isHovering: false,
        hoeveredImage: '',
        projectIndex: 0
    };

    handleMouseHover = (img) => () => {
        this.setState({ hoveredImage: img[1] });
    }

    handleMouseLeave = () => {
        this.setState({ hoveredImage: '' });
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);

        let scrollToLocation = () => {
            const { hash } = window.location;
            if (hash !== '') {
                let retries = 0;
                let footerPath = window.location.hash.split('/');
                const id = footerPath[2];
                const scroll = () => {
                    retries += 0;
                    if (retries > 50) return;
                    if (id) {
                        setTimeout(() => {
                            console.log(this.state.projectIndex);
                            
                            if (this.state.projectIndex != 0) {
                                const element = document.getElementById(id);
                                const elementParent = document.getElementsByClassName('react-wrap')[0];
                                const headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
                                const count = element.offsetTop - elementParent.scrollTop - headerHeight;
                                elementParent.scrollBy({ top: count, left: 0, behavior: 'smooth' });
                            }
                        }, 300);
                    } else {
                        setTimeout(scroll, 100);
                    }
                };
                scroll();
            }
        };

        scrollToLocation();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(eventObject) {
        window.scrollY == 0 ? console.log('no scroll') : console.log('scroll');
    };

    render() {
        const { hoveredImage } = this.state;

        return (
            <main className="index wrapper">
                <div className="index-content">
                    {IndexProjectsToLoad.map((galleryObj, i) => {
                        this.projectIndex = i;
                        if (i != 0 ) {
                            return (
                                <div className="index-project-wrap" key={galleryObj + i} id={Object.keys(galleryObj)[0]} ref="list">
                                    <p className="index-project-wrap__heading ">{Object.keys(galleryObj)[0].replace(/_/g, ' ')}</p>
                                    <div className="index-project">
                                        {Object.values(galleryObj)[0].map((img, i) => (
                                            <ImageItem key={img + i} gallery={galleryObj} index={i} img={img} />
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    }



                    )}
                </div>
            </main>
        );
    }
}

export default Index