import Slider from "react-slick";
import React from 'react';
import { IndexProjectsToLoad } from '../imgs';


const TextObj = {
    violin_1972: [
        'Barbecue party '
    ],
    orvochrome_1974_1985: [
        'tips can help '
    ],
    additions_1974_1989: [
        'a host put together'
    ],
    love_1976: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    documental_photography_1977: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    alcohol_psychosis_1983: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    montages_1984: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    IxSeven_1987: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    blatari_vospoda_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    eclipse_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    energetic_portraits_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    total_photography_1990_1994: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    the_life_of_factory_1990: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    archive_series_1995: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    common_field_1996: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    paried_still_lifes_1998: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    parnography_1998: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    home_life_book_2002: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    second_heaven_2003: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ]
};

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
                                {url[i]}
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