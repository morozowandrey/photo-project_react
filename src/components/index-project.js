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
                onMouseEnter={this.handleMouseHover(img)}
                onMouseLeave={this.handleMouseLeave}
            >
                <img src={img[0]} alt="" className="index-project-item__img" />

                {isHovering &&
                    <img src={img[1]} alt="" className="index-project-item__img index-project-item__img_hover" />
                }
            </Link>
        );
    }
}

export default Index