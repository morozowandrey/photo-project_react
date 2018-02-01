import Slider from "react-slick";
import React from 'react';

const ImgObj = {
    violin: [
        require('../images/1990-1994/img298.jpg'), 
        require('../images/1990-1994/img296.jpg'), 
        require('../images/1990-1994/img297.jpg'), 
        require('../images/1990-1994/img300.jpg'), 
        require('../images/1990-1994/img306.jpg'), 
        require('../images/1990-1994/img314.jpg')
    ],
    orvochrome: [
        require('../images/1990-1994/img298.jpg'),
    ],
    additions: [
        require('../images/1990-1994/img298.jpg'),
    ],
    love: [
        require('../images/1990-1994/img298.jpg'),
    ],
    documental_photography: [
        require('../images/1990-1994/img298.jpg'),
    ],
    alcohol_psychosis: [
        require('../images/1990-1994/img298.jpg'),
    ],
    mantages: [
        require('../images/1990-1994/img298.jpg'),
    ],
    onex7: [
        require('../images/1990-1994/img298.jpg'),
    ],
    archive_series: [
        require('../images/1990-1994/img298.jpg'),
    ],
    blatari_vospoda: [
        require('../images/1990-1994/img298.jpg'),
    ],
    energetic_portraits: [
        require('../images/1990-1994/img298.jpg'),
    ],
    eclipse: [
        require('../images/1990-1994/img298.jpg'),
    ],
    factory_life: [
        require('../images/1990-1994/img298.jpg'),
    ],
    total_photography: [
        require('../images/1990-1994/img298.jpg'),
    ],
    common_field: [
        require('../images/1990-1994/img298.jpg'),
    ],
    parnography: [
        require('../images/1990-1994/img298.jpg'),
    ],
    paried_still_lifes: [
        require('../images/1990-1994/img298.jpg'),
    ],
    home_life_book: [
        require('../images/1990-1994/img298.jpg'),
    ],
    still_lifes: [
        require('../images/1990-1994/img298.jpg'),
    ],
    second_heaven: [
        require('../images/1990-1994/img298.jpg'),
    ]
};

class SliderComponent extends React.Component {
    componentDidMount () {
        console.log(this.props.match.params.sliderId);
    };

    render () {
        let photos = ImgObj[this.props.match.params.sliderId].map((url, i) => {
            return (
                <div className="slider-slide" key={i}>
                    <img className="slider-slide__img" src={url} alt=""/>
                </div>
            );
        });
        return (
            <Slider>
                {photos}
            </Slider>
        );
    }
};

export default SliderComponent