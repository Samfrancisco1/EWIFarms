import React from 'react';
import "./index.css";
import Invest from "../../../assets/images/invest.svg";

export default function StepTwo() {
  return (
    <>
         <div className="step2">

            <div className="invest">
                <h2>Step Two</h2>
                <p> 
                    Insert the amount of money you want to invest and our smart calculator will
                    calculate the interest you stand to make in 3 months. Minimum investment is NGN 150,000.00.
                    Try calculation below
                </p>

                <a href="!#" >Calculate Investment</a>
            </div>
            <div className="how-image">
             <img src={Invest} alt="Step2" width="70%"/>
            </div>
        </div>
    </>
  );
}
