import Slider from "react-slick";
import React from 'react';
import { IndexProjectsToLoad } from '../data/data';

class SliderComponent extends React.Component {
    state = {
        mainImg: true,
        activeSlide: 0,
        allSlides: 0
    };

    handleImageLoaded(e) {
        e.target.style.display = 'block';
    }

    componentDidMount() {
        setTimeout(() => {
            this.refs.slider.slickGoTo(parseInt(this.props.match.params.slideNum));
        }, 0);
        this.refs.slider.innerSlider.props.onInit();
        this.refs.slider.innerSlider.props.afterChange();
    };

    render() {
        const { mainImg } = this.state;
        let photos = {};

        IndexProjectsToLoad.forEach(galleryObj => {
            if (Object.keys(galleryObj)[0] == this.props.match.params.sliderId) {
                photos = galleryObj[Object.keys(galleryObj)[0]].map((url, i) => {
                    if (i == 0) {
                        return (
                            <div className="slider-slide" key={i}>
                                <p className="slider-slide__text">{url[i]}</p>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="slider-slide" key={i}>
                                <img className="slider-slide__img slider-slide__img_progressive" src={url[0]} alt="" />
                                {mainImg &&
                                    <img
                                        id={`${Object.keys(galleryObj)[0]}${i}`}
                                        src={url[1]}
                                        onLoad={this.handleImageLoaded.bind(this)}
                                        className="slider-slide__img slider-slide__img_hover"
                                        alt={`photo ${Object.keys(galleryObj)[0]}`}
                                    />
                                }
                            </div>
                        );
                    }
                });
            }
        });

        const settings = {
            className: 'slick-slider-fade',
            cssEase: 'none',
            lazyLoad: true,
            dots: true,
            onInit: (event, slick, currentSlide, nextSlide) => {
                var currentSlide = this.refs.slider.innerSlider.props.initialSlide + 1;
                var slideCount = this.refs.slider.props.children.length;
                this.setState({ allSlides: slideCount })
            },
            beforeChange: (current, next) => {
                this.setState({
                    activeSlide: next
                })
            },
            afterChange: current => this.setState({ activeSlide2: current })
        };

        return (
            <div className="slider-wrapper">
                <p className="slider-counter">
                    {this.state.activeSlide + 1} / {this.state.allSlides}
                </p>
                <Slider {...settings} ref="slider">
                    {photos}
                </Slider>
            </div>
        );
    }
};

export default SliderComponent