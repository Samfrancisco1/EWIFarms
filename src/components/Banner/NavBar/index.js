import React from 'react';
import './index.css';

import logo from "../../../assets/images/logo.png"

export default function NabBar() {
  return (
    <div className="nav-link">
        <img src={logo} alt="logo" width="150px" />
        <ul>
            <li><a href="#home">Home </a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#calculator">Investment Calculator</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li className="login">Sign In</li>
            <li className="register">Sign Up</li>
        </ul>
    </div>
  );
}
