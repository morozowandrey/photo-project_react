import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';

import './styles/style.css';

import Home from './components/Home.js';
import Index from './components/Index-page.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Info from './components/Info.js';
import Slider from './components/Slider.js';

ReactDOM.render(
    <HashRouter>
      <div className="react-wrap">
        <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/index" component={Index} />
          <Route path="/contact" component={Contact} />
          <Route path="/info" component={Info} />
          <Route path="/slider/:sliderId" component={Slider} />
        <Footer/>
      </div>
    </HashRouter>,
    document.getElementById('root')
  );

  