import React from "react";
import "./index.css";
import { Col, Row, Container } from "react-bootstrap";

import Invest from "../../../assets/images/invest.svg";

export default function StepTwo() {
	return (
		<>
			<div className="step2">
				<Container>
					<Row>
						<Col sm={6}>
							<div className="invest">
								<h2>Step Two</h2>
								<p>
									Insert the amount of money you want to invest and our smart
									calculator will calculate the interest you stand to make in 3
									months. Minimum investment is NGN 150,000.00. Try calculation
									below
								</p>

								<a href="#calculator">Calculate Investment</a>
							</div>
						</Col>

						<Col sm={6}>
							<div className="how-image">
								<img src={Invest} alt="Step2" width="100%" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
