import React from 'react';
import './index.css';
import BgVideo from "../../../assets/videos/banner.mp4";
import NavBar from '../NavBar';

export default function BannerVideo() {
  return (
    <>
        <div className="banner-video">
            <NavBar />
            <video autoPlay loop >
                <source src={ BgVideo } type="video/mp4" />
            </video>            
        </div>
    </>
  );
}
