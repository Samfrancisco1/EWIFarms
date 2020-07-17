import React from "react";
import { Row, Col, Card } from "antd";
import "./index.css";

export default class Calculator extends React.Component {
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
				<div>
					<h2> Calculator</h2>
					<Card
						style={{
							marginTop: 50,
							borderRadius: 10,
							boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) ",
							transition: "0.3s",
						}}
					>
						<Row>
							<Col xs={{ span: 22, offset: 1 }} lg={{ span:11, offset: 1 }}>
								<div  className="calculator-form">
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
												
											</div>
										)}
									</form>
								</div>
							</Col>
							<Col xs={{ span: 22, offset: 1 }} lg={{ span:11, offset: 1 }}>
								<div className="calculator-svg">
									
								</div>
							</Col>
						</Row>
					</Card>
				</div>
			</>
		);
	}
}
