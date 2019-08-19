import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
    state = {
        isHovering: false,
        progressive: false
    };

    handleMouseHover = (img) => () => {
        this.setState({
            isHovering: true,
            progressive: true
        });
    }

    handleMouseLeave = () => {
        this.setState({ isHovering: false });
    }

    handleImageLoaded() {
        this.setState({
            progressive: false
        });
    }

    render() {
        const { gallery, img, index } = this.props;
        const { isHovering, progressive } = this.state;

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
                {progressive &&
                    <img
                        src={img[0]}
                        className="index-project-item__img index-project-item__img_progressive"
                        alt=""
                    />
                }
                {isHovering &&
                    <img
                        src={img[1]}
                        id={img[1].split('media/')[1].split('.')[0] + '__big-img'}
                        className="index-project-item__img index-project-item__img_hover"
                        onLoad={this.handleImageLoaded.bind(this)}
                        alt=""
                    />
                }
            </Link>
        );
    }
}

export default Index