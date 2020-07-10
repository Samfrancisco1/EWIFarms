import React from "react";
import "./index.css";
import Earning from "../../../assets/images/earning.svg";

export default function StepThree() {
	return (
		<>
			<div className="step3">
				<img src={Earning} alt="Step1" width="45%" />
				<div className="earning">
					<h2>Step One</h2>
					<p>
						Click on get started or the sign up button to register you account.
						Sign up process is very fast and thorogh because we will need to
						verify the imformation provided.
					</p>

					<a href="!#">Get Started</a>
				</div>
			</div>
		</>
	);
}
