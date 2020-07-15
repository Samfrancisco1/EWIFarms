import React from "react";
import { Row, Col, Card } from "antd";
import "./index.css";

export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}
	render() {
		return (
			<>
				<div>
					<h2> Profile</h2>
					<Card
						style={{
							marginTop: 50,
							borderRadius: 10,
							boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) ",
							transition: "0.3s",
						}}
					>
						<Row>
							<Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
								<div className="profile-form">
									<label>Personal Information</label>
									<form method="POST" style={{ alignItems: "start" }}>
										<input
											type="text"
											value=""
											className="form-control"
											name="name"
											disabled
										/>

										<input
											type="text"
											value=""
											className="form-control"
											name="email"
											disabled
										/>

										<input
											type="text"
											value=""
											className="form-control"
											name="phone"
											disabled
										/>
									</form>
								</div>
							</Col>
							<Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
								<div className="bank-form">
									<label>Bank Information</label>
								</div>
							</Col>
						</Row>
					</Card>
				</div>
			</>
		);
	}
}
