import React from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import NavMain from '../navbar/index';
import FooterMain from '../footer-main/index'
import About from '../about/index';
import Vision from '../vision/index';
import Connect from '../connect/index';
import './App.css';

function App() {
  return (
    <Router>
      <div className="vslkr-app">
        <NavMain />
        <div className="App">
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/vision" exact component={Vision} />
          <Route path="/connect" exact component={Connect} />
        </div>
        <FooterMain />
    </div>
    </Router>
  );
}

export default App;
