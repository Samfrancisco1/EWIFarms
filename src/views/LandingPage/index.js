import React, { Component } from 'react';
import "./index.css";
import Banner from '../../components/Banner';
import How from '../../components/How';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page">
          <Banner />
          <How />
        </div>
      </>
    )
  }
}

export default LandingPage
