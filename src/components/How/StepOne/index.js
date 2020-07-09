import React from 'react';
import "./index.css";
import Step1 from "../../../assets/images/step1.svg";

export default function StepOne() {
  return (
    <>
         <div className="step1">

            <img src={Step1} alt="Step1" width="45%"/>
            <div className="sign-up">
                <h2>Step One</h2>
                <p>Click on get started or the sign up button to register you account.
                    Sign up process is very fast and thorogh because we will need to verify the imformation provided.
                </p>

                <a className="get-started-btn" href="!#" >Get Started</a>
            </div>
        </div>
    </>
  );
}
