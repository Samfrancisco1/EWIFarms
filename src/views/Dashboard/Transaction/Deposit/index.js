import React from "react";
import { Row, Col, Card } from "antd";
import "./index.css";

import Farm from "../../../../assets/images/farm.jpg";

export default class Deposit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interest: 0,
			value: "",
			error: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.setState({ error: "Minimum of NGN 150,000" });
	}

	handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("depositAmount", this.state.value);
		this.props.history.push(`/paystack`);
	}

	calculateInterest(amount) {
		return (amount * 30) / 100;
	}

	render() {
		return (
			<>
				<div>
					<h2>Transaction Deposit</h2>
					<Card
						style={{
							marginTop: 50,
							borderRadius: 10,
							boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) ",
							transition: "0.3s",
						}}
					>
						<Row>
							<Col span={8}>
								<div className="deposit">
									<img
										src={Farm}
										alt="Farm"
										style={{ width: "300px", height: "200px" }}
									/>
								</div>
							</Col>

							<Col span={16}>
								<div onSubmit={this.handleSubmit} className="deposit-form">
									<form method="POST">
										<input
											type="number"
											value={this.state.value}
											onChange={this.handleChange}
											placeholder="Enter Amount"
											className="form-control"
										/>
										{this.state.value < 150000 ? (
											<label className="error">{this.state.error}</label>
										) : (
											<div>
												<label className="interest">
													Interest: NGN{" "}
													{this.calculateInterest(this.state.value)} <br />
													Expected Return:NGN{" "}
													{parseInt(this.state.value) +
														parseInt(this.calculateInterest(this.state.value))}
												</label>
												<br />
												<br />
												<button type="submit" name="proceed" className="btn">
													Proceed to Payment
												</button>
											</div>
										)}
									</form>
								</div>
							</Col>
						</Row>
						<Row></Row>
					</Card>
				</div>
			</>
		);
	}
}
