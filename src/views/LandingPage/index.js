import React, { Component } from 'react';
import "./index.css";
import Banner from '../../components/Banner';
import How from '../../components/How';
import Calculator from '../../components/Calculator';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page">
          <Banner />
          <How />
          <Calculator />
        </div>
      </>
    )
  }
}

export default LandingPage
