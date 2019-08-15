import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { IndexProjectsToLoad, IndexProjectsShow } from '../imgs';

function loadMore() {
    console.log(IndexProjectsShow);
    IndexProjectsShow.push(IndexProjectsToLoad.pop());
    console.log(IndexProjectsShow);
}

class Index extends React.Component {
    state = {
        isHovering: false,
    };

    handleMouseHover = (img) => () => {
        this.setState({ isHovering: true });

        let box = document.getElementById(img[1].split('media/')[1].split('.')[0]);
        let progressiveImg = box.getElementsByClassName('index-project-item__img_hover');

        let imgLarge = new Image();
        imgLarge.src = img[1];
        imgLarge.onload = function () {
            document.getElementById(img[1].split('media/')[1]).remove();
        };
    }

    handleMouseLeave = () => {
        this.setState({ isHovering: false });
    }

    render() {
        const { gallery, img, index } = this.props;
        const { isHovering } = this.state;

        return (
            <Link
                to={`/slider/${Object.keys(gallery)[0]}/${(index + 1)}`}
                className="index-project-item"
                key={img}
                id={img[1].split('media/')[1].split('.')[0]}
                onMouseEnter={this.handleMouseHover(img)}
                onMouseLeave={this.handleMouseLeave}
            >
                <img src={img[0]} alt="" className="index-project-item__img" />

                {isHovering &&
                    <div className="progressive-box">
                    <img id={img[1].split('media/')[1]} src={img[0]} alt="" className="index-project-item__img_progressive" />
                    <img id={img[1].split('media/')[1]+2} src={img[1]} alt="" className="index-project-item__img index-project-item__img_hover" />
                </div>
                }
            </Link>
        );
    }
}

export default Index