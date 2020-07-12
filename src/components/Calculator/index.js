import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interest: 0,
			value: "",
			error: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.setState({ error: "Minimum of NGN 150,000" });
	}
	calculateInterest(amount) {
		return (amount * 30) / 100;
	}

	render() {
		return (
			<>
				<section id="calculator" className="calculator">
					<h2>Investment Calculator</h2>
					<h4>
						Input the amount you want to invest and get how much your profit
						is!!
					</h4>

					<form method="POST">
						<input
							type="number"
							value={this.state.value}
							onChange={this.handleChange}
							placeholder="Enter Amount"
						/>
						{this.state.value < 150000 ? (
							<label className="error">{this.state.error}</label>
						) : (
							<label className="interest">
								Interest: NGN {this.calculateInterest(this.state.value)}
							</label>
						)}
					</form>
				</section>
			</>
		);
	}
}
