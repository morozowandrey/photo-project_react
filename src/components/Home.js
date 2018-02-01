import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render(){
        return (
              <main className="home wrapper">
                <div className="home-content">

              <Link to="/slider/violin">
                <div className="home-content-item">
                  <p className="home-content-item__text">VIOLIN</p>
                  <img src={require("../images/home-thumbnails/violin.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/violin.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1972</p>
                </div>
              </Link>

              <Link to="/slider/orvochrome">
                <div className="home-content-item">
                  <p className="home-content-item__text">ORVOCHROME</p>
                  <img src={require("../images/home-thumbnails/love.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/love.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1972</p>
                </div>
              </Link>

              <Link to="/slider/additions">
                <div className="home-content-item">
                  <p className="home-content-item__text">ADDITIONS</p>
                  <img src={require("../images/home-thumbnails/additions.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/additions.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1974-1989</p>
                </div>
              </Link>
              
              <Link to="/slider/love">
                <div className="home-content-item">
                  <p className="home-content-item__text">LOVE</p>
                  <img src={require("../images/home-thumbnails/love.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/love.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1976</p>
                </div>
              </Link>
              
              <Link to="/slider/documental_photography">
                <div className="home-content-item">
                  <p className="home-content-item__text">DOCUMENTAL PHOTOGRAPHY</p>
                  <img src={require("../images/home-thumbnails/documental_photography.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/documental_photography.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1977– …</p>
                </div>
              </Link>

              <Link to="/slider/alcohol_psychosis">
                <div className="home-content-item">
                  <p className="home-content-item__text">ALCOHOL PSYCHOSIS</p>
                  <img src={require("../images/home-thumbnails/alcohol_psychosis.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/alcohol_psychosis.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1983</p>
                </div>
              </Link>
              
              <Link to="/slider/mantages">
                <div className="home-content-item">
                  <p className="home-content-item__text">MONTAGES</p>
                  <img src={require("../images/home-thumbnails/montages.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/montages.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1984-…</p>
                </div>
              </Link>

              <Link to="/slider/onex7">
                <div className="home-content-item">
                  <p className="home-content-item__text">1X7</p>
                  <img src={require("../images/home-thumbnails/1x7.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/1x7.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1987</p>
                </div>
              </Link>
              
              <Link to="/slider/archive_series">
                <div className="home-content-item">
                  <p className="home-content-item__text">ARCHIVE SERIES</p>
                  <img src={require("../images/home-thumbnails/archive_series.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/archive_series.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1995</p>
                </div>
              </Link>

              <Link to="/slider/blatari_vospoda">
                <div className="home-content-item">
                  <p className="home-content-item__text">BLATARI VOSPODA</p>
                  <img src={require("../images/home-thumbnails/blatari_vospoda.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/blatari_vospoda.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1989</p>
                </div>
              </Link>

              <Link to="/slider/energetic_portraits">
                <div className="home-content-item">
                  <p className="home-content-item__text">ENERGETIC PORTRAITS</p>
                  <img src={require("../images/home-thumbnails/energetic_portraits.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/energetic_portraits.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1989</p>
                </div>
              </Link>

              <Link to="/slider/eclipse">
                <div className="home-content-item">
                  <p className="home-content-item__text">ECLIPSE</p>
                  <img src={require("../images/home-thumbnails/eclipse.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/eclipse.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1989</p>
                </div>
              </Link>

              <Link to="/slider/factory_life">
                <div className="home-content-item">
                  <p className="home-content-item__text">FACTORY LIFE</p>
                  <img src={require("../images/home-thumbnails/factory_life.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/factory_life.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1990</p>
                </div>
              </Link>

              <Link to="/slider/total_photography">
                <div className="home-content-item">
                  <p className="home-content-item__text">TOTAL PHOTOGRAPHY</p>
                  <img src={require("../images/home-thumbnails/total+photography.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/total+photography.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1990-1994</p>
                </div>
              </Link>

              <Link to="/slider/common_field">
                <div className="home-content-item">
                  <p className="home-content-item__text">COMMON FIELD</p>
                  <img src={require("../images/home-thumbnails/common_field.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/common_field.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1996</p>
                </div>
              </Link>

              <Link to="/slider/parnography">
                <div className="home-content-item">
                  <p className="home-content-item__text">PARNOGRAPHY</p>
                  <img src={require("../images/home-thumbnails/parnograhy.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/parnograhy.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1998</p>
                </div>
              </Link>

              <Link to="/slider/paried_still_lifes">
                <div className="home-content-item">
                  <p className="home-content-item__text">PAIRED STILL LIFES</p>
                  <img src={require("../images/home-thumbnails/paired_still_lives.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/paired_still_lives.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1998</p>
                </div>
              </Link>

              <Link to="/slider/home_life_book">
                <div className="home-content-item">
                  <p className="home-content-item__text">HOME LIFE BOOK</p>
                  <img src={require("../images/home-thumbnails/home_life_book.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/home_life_book.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">2002</p>
                </div>
              </Link>

              <Link to="/slider/still_lifes">
                <div className="home-content-item">
                  <p className="home-content-item__text">STILL LIFES</p>
                  <img src="" className="home-content-item__img" alt="" />
                  <p className="home-content-item__text">1971-...</p>
                </div>
              </Link>

              <Link to="/slider/second_heaven">
                <div className="home-content-item">
                  <p className="home-content-item__text">SECOND HEAVEN</p>
                  <img src={require("../images/home-thumbnails/second_heaven.jpg")} className="home-content-item__img" alt="" />
                  <img src={require("../images/home-thumbnails/second_heaven.jpg")} className="home-content-item__img home-content-item__img_hover" alt="" />
                  <p className="home-content-item__text">1999-2003</p>
                </div>
              </Link>

              </div>
            </main>
        );
    }
}

export default Home