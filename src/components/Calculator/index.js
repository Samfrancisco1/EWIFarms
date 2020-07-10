import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {
	render() {
		return (
			<>
				<section className="calculator">
					<h2>Investment Calculator</h2>
					<h4>
						Input the amount you want to invest and get how much your profit
						is!!
					</h4>

					<form method="POST">
						<input type="number" name="amount" placeholder="Enter Amount" />
						<label id="interest">Interest: 0</label>
					</form>
				</section>
			</>
		);
	}
}
