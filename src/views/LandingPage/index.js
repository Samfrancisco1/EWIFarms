import React, { Component } from 'react';
import "./index.css";
import Banner from '../../components/Banner';
import How from '../../components/How';
import Calculator from '../../components/Calculator';
import About from '../../components/About';
import Testimony from '../../components/Testimony';
import Contact from '../../components/Contact';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page">
          <Banner />
          <How />
          <Calculator />
          <About />
          <Testimony />
          <Contact />
        </div>
      </>
    )
  }
}

export default LandingPage
