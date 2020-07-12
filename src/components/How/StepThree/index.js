import React from "react";
import "./index.css";
import { Col, Row, Container } from "react-bootstrap";

import Earning from "../../../assets/images/earning.svg";

export default function StepThree() {
	return (
		<>
			<div className="step3">
				<Container>
					<Row>
						<Col sm={6}>
							<img src={Earning} alt="Step3" width="100%" />
						</Col>

						<Col sm={6}>
							<div className="earning">
								<h2>Step Three</h2>
								<p>
									Sit back and relax while we make you money. After investment
									is matured, it can be cashed out at any time
								</p>

								<a href="!#">Get Started</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
