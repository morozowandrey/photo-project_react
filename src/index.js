import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Home from './components/Home.js';
import Index from './components/Index-page.js';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Info from './components/Info.js';
import Slider from './components/Slider.js';
import ProjectInfo from './components/ProjectInfo.js';
import Footer from './components/Footer.js';

import './styles/fonts.css';
import './styles/style.css';

<link rel="preload" as="font" href="/fonts/gt-america-standard-regular.ttf" />

ReactDOM.render(
  <HashRouter>
    <div className="react-wrap">
      <Helmet>
        <title>Evgeniy Pavlov Photography</title>

        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        <meta name="robots" content="index,follow" />
        <meta name="description" content="Online archive of one of the founders of the worldwide-known Kharkiv School of Photogrpahy – Evgeniy Pavlov." />
        <meta name="twitter:description" content="Online archive of one of the founders of the worldwide-known Kharkiv School of Photogrpahy – Evgeniy Pavlov." />
        <meta property="og:description" content="Online archive of one of the founders of the worldwide-known Kharkiv School of Photogrpahy – Evgeniy Pavlov." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Evgeniy Pavlov Photography" />
        <meta property="og:title" content="Evgeniy Pavlov Photography" />
        <meta property="og:url" content="[https://evgeniypavlov.com](https://evgeniypavlov.com)" />
        <meta property="og:type" content="website" />

        <base href="/"></base>

      </Helmet>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/index" component={Index} />
      <Route path="/contact" component={Contact} />
      <Route path="/info" component={Info} />
      <Route path="/project-info" component={ProjectInfo} />
      <Route path="/slider/:sliderId/:slideNum" component={Slider} />
      <Footer />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
