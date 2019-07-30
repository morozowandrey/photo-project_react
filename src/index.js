import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './styles/style.css';

import Home from './components/Home.js';
import Index from './components/Index-page.js';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Info from './components/Info.js';
import Slider from './components/Slider.js';
import ProjectInfo from './components/ProjectInfo.js';
import Footer from './components/Footer.js';

ReactDOM.render(
  <HashRouter>
    <div className="react-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pavlov Photo</title>
        <base href="/"></base>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
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
