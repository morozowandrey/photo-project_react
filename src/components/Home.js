import React from 'react';
import { Link } from 'react-router-dom';

const HomePrev = {
  violin_1972: [
    require('../images/home-thumbnails/violin.jpg'),
  ],
  orvochrome_1974_1985: [
    require('../images/home-thumbnails/orwochrom.jpg'),
  ],
  additions_1974_1989: [
    require('../images/home-thumbnails/additions.jpg'),
  ],
  documental_photography_1977: [
    require('../images/home-thumbnails/documental_photography.jpg'),
  ],
  love_1976: [
    require('../images/home-thumbnails/love.jpg'),
  ],
  alcohol_psychosis_1983: [
    require('../images/home-thumbnails/alcohol_psychosis.jpg'),
  ],
  montages_1984: [
    require('../images/home-thumbnails/montages.jpg'),
  ],
  IxSeven_1987: [
    require('../images/home-thumbnails/1x7.jpg'),
  ],
  blatari_vospoda_1989: [
    require('../images/home-thumbnails/blatari_vospoda.jpg'),
  ],
  eclipse_1989: [
    require('../images/home-thumbnails/eclipse.jpg'),
  ],
  energetic_portraits_1989: [
    require('../images/home-thumbnails/energetic_portraits.jpg'),
  ],
  total_photography_1990_1994: [
    require('../images/home-thumbnails/total+photography.jpg'),
  ],
  the_life_of_factory_1990: [
    require('../images/home-thumbnails/factory_life.jpg'),
  ],
  archive_series_1995: [
    require('../images/home-thumbnails/archive_series.jpg'),
  ],
  paried_still_lifes_1998: [
    require('../images/home-thumbnails/paired_still_lives.jpg'),
  ],
  common_field_1996: [
    require('../images/home-thumbnails/common_field.jpg'),
  ],
  parnography_1998: [
    require('../images/home-thumbnails/parnograhy.jpg'),
  ],
  home_life_book_2002: [
    require('../images/home-thumbnails/home_life_book.jpg'),
  ],
  second_heaven_2003: [
    require('../images/home-thumbnails/second_heaven.jpg'),
  ]
};

class Home extends React.Component {

  render() {

    let homeLink = Object.keys(HomePrev).map(function (projectName, i) {

      let projectNamesArr = projectName.match(/[\D]+(?=[\_])|[\d]+_?[\d]+/g),
          dates = projectNamesArr[1].replace("_", "-"),
          prn = projectNamesArr[0].replace(/_/g, ' ');

      return <Link to={"/slider/" + projectName + "/0"}>
        <div className="home-content-item">
          <p className="home-content-item__text">{prn.replace(/_/g, ' ')}</p>
          {
            HomePrev[projectName].map(function (imgPass, i2) {
              return <div className="home-content-item-imgbox">
                <img src={imgPass} className="home-content-item__img" alt="" />
                <img src={imgPass} className="home-content-item__img home-content-item__img_hover" alt="" />
              </div>
            })
          }
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