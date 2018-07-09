import React from 'react';
import { Link } from 'react-router-dom';

const HomePrev = {
  violin_1972: [
    require('../images/home-thumbnails/violin.jpg'),
    require('../images/home-thumbnails-hover/violin.jpg'),
  ],
  orvochrome_1974_1985: [
    require('../images/home-thumbnails/orwochrom.jpg'),
    require('../images/home-thumbnails-hover/orwochrom.jpg'),
  ],
  additions_1974_1989: [
    require('../images/home-thumbnails/additions.jpg'),
    require('../images/home-thumbnails-hover/additions.jpg'),
  ],
  documental_photography_1977: [
    require('../images/home-thumbnails/documental_photography.jpg'),
    require('../images/home-thumbnails-hover/documental_photography.jpg'),
  ],
  love_1976: [
    require('../images/home-thumbnails/love.jpg'),
    require('../images/home-thumbnails-hover/love.jpg'),
  ],
  alcohol_psychosis_1983: [
    require('../images/home-thumbnails/alcohol_psychosis.jpg'),
    require('../images/home-thumbnails-hover/alcohol_psychosis.jpg'),
  ],
  montages_1984: [
    require('../images/home-thumbnails/montages.jpg'),
    require('../images/home-thumbnails-hover/montages.jpg'),
  ],
  IxSeven_1987: [
    require('../images/home-thumbnails/1x7.jpg'),
    require('../images/home-thumbnails-hover/1x7.jpg'),
  ],
  blatari_vospoda_1989: [
    require('../images/home-thumbnails/blatari_vospoda.jpg'),
    require('../images/home-thumbnails-hover/blatari_vospoda.jpg'),
  ],
  eclipse_1989: [
    require('../images/home-thumbnails/eclipse.jpg'),
    require('../images/home-thumbnails-hover/eclipse.jpg'),
  ],
  energetic_portraits_1989: [
    require('../images/home-thumbnails/energetic_portraits.jpg'),
    require('../images/home-thumbnails-hover/energetic_portraits.jpg'),
  ],
  total_photography_1990_1994: [
    require('../images/home-thumbnails/total+photography.jpg'),
    require('../images/home-thumbnails-hover/total+photography.jpg'),
  ],
  the_life_of_factory_1990: [
    require('../images/home-thumbnails/factory_life.jpg'),
    require('../images/home-thumbnails-hover/factory_life.jpg'),
  ],
  archive_series_1995: [
    require('../images/home-thumbnails/archive_series.jpg'),
    require('../images/home-thumbnails-hover/archive_series.jpg'),
  ],
  paried_still_lifes_1998: [
    require('../images/home-thumbnails/paired_still_lives.jpg'),
    require('../images/home-thumbnails-hover/paired_still_lives.jpg'),
  ],
  common_field_1996: [
    require('../images/home-thumbnails/common_field.jpg'),
    require('../images/home-thumbnails-hover/common_field.jpg'),
  ],
  parnography_1998: [
    require('../images/home-thumbnails/parnograhy.jpg'),
    require('../images/home-thumbnails-hover/parnograhy.jpg'),
  ],
  home_life_book_2002: [
    require('../images/home-thumbnails/home_life_book.jpg'),
    require('../images/home-thumbnails-hover/home_life_book.jpg'),
  ],
  second_heaven_2003: [
    require('../images/home-thumbnails/second_heaven.jpg'),
    require('../images/home-thumbnails-hover/second_heaven.jpg'),
  ]
};

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      let images = Array.prototype.slice.call(document.getElementsByClassName("home-content-item__img"));
      images.map(function (image, i) {
        console.log(image.offsetHeight);
        if (image.offsetHeight > image.offsetWidth) {
          image.classList.add("home-content-item__img_vertical");
        }
        else if (image.offsetHeight < image.offsetWidth) {
          image.classList.add("home-content-item__img_horisontal");
        }
      });
    }, 500);
  }

  render() {

    let homeLink = Object.keys(HomePrev).map(function (projectName, i) {

      let projectNamesArr = projectName.match(/[\D]+(?=[\_])|[\d]+_?[\d]+/g),
        dates = projectNamesArr[1].replace("_", "-"),
        prn = projectNamesArr[0].replace(/_/g, ' ');

      return <Link className="home-link-wrap" to={"/slider/" + projectName + "/0"}>
        <div className="home-content-item">
          <p className="home-content-item__text">{prn.replace(/_/g, ' ')}</p>

          <div className="home-content-item-imgbox">
            <img src={HomePrev[projectName][0]} className="home-content-item__img" alt="" />
            <img src={HomePrev[projectName][1]} className="home-content-item__img home-content-item__img_hover" alt="" />
          </div>

          <p className="home-content-item__text">{dates}</p>
        </div>
      </Link>
    })

    return (
      <main className="home wrapper">
        <div className="home-content">
          {homeLink}
        </div>
      </main>
    );
  }
}

export default Home