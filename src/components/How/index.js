import React from 'react';
import "./index.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function componentName() {
  return (
    <>
        <section className="how">
            <h2>HOW IT WORKS</h2>
            <h4>Get started in just three (3) simple steps</h4>
            <StepOne />
            <StepTwo />
            <StepThree />
        </section>
    </>
  );
}
