import React from "react";
import { Row, Col, Card } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import axios from "../../../util/axios";

import "./index.css";

export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			name: "",
			phone: "",
			email: "",
			image: "",
			bank: "",
			number: "",
			account_name: "",
		};
	}

	componentDidMount() {
		let token = localStorage.usertoken;
		let decoded = jwt_decode(token);

		if (localStorage.banktoken != null) {
			let bank_decoded = jwt_decode(localStorage.banktoken);

			this.setState({
				account_name: bank_decoded.name,
				bank: bank_decoded.bank,
				number: bank_decoded.account,
			});
		}

		this.setState({
			name: decoded.name,
			image: decoded.image,
			email: decoded.email,
			phone: decoded.phone,
		});
	}

	render() {
		const BankSchema = Yup.object().shape({
			name: Yup.string()
				.min(2, "Too Short!")
				.max(80, "Too Long!")
				.required("Required"),
			bank: Yup.string()
				.min(2, "Too Short!")
				.max(80, "Too Long!")
				.required("Required"),
			number: Yup.number()
				.typeError("That doesn't look like a account number")
				.positive("A bank account can't start with a minus")
				.integer("A bank account can't include a decimal point")
				.min(11)
				.required("A bank account is required"),
		});
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
											value={this.state.name}
											className="form-control"
											name="name"
											disabled
										/>

										<input
											type="text"
											value={this.state.email}
											className="form-control"
											name="email"
											disabled
										/>

										<input
											type="text"
											value={this.state.phone}
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
									<Formik
										initialValues={{
											name: "",
											bank: "",
											number: "",
										}}
										validationSchema={BankSchema}
										onSubmit={(values, { setSubmitting, resetForm }) => {
											setSubmitting(true);
											console.log(values);

											axios
												.post("bank", {
													name: values.name,
													bank: values.bank,
													number: values.number,
													email: this.state.email,
												})
												.then((res) => {
													localStorage.setItem("banktoken", res.data);
													console.log(res);
												})
												.catch((err) => {
													console.log(err);
												});
										}}
									>
										{({
											errors,
											touched,
											values,
											handleBlur,
											handleChange,
											handleSubmit,
											isSubmitting,
											setFieldValue,
										}) => (
											<form onSubmit={handleSubmit} className="bank">
												<div>
													<i className="fas fa-user"></i>
													<input
														type="text"
														name="name"
														placeholder="Enter Name"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															this.state.account_name === ""
																? values.name
																: this.state.account_name
														}
														className={
															touched.name && errors.name
																? "has-error"
																: "form-control"
														}
														disabled={
															this.state.account_name === "" ? false : true
														}
													/>
												</div>
												<div>
													<i className="fas fa-envelope"></i>
													<input
														type="text"
														name="bank"
														placeholder="Enter bank name"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															this.state.bank === ""
																? values.bank
																: this.state.bank
														}
														className={
															touched.bank && errors.bank
																? "has-error"
																: "form-control"
														}
														disabled={this.state.bank === "" ? false : true}
													/>
												</div>
												<div>
													<i className="fas fa-user"></i>
													<input
														type="number"
														name="number"
														placeholder="Enter account Number"
														onChange={handleChange}
														onBlur={handleBlur}
														value={
															this.state.number === ""
																? values.number
																: this.state.number
														}
														className={
															touched.number && errors.number
																? "has-error"
																: "form-control"
														}
														disabled={this.state.number === "" ? false : true}
													/>
												</div>

												<input
													type="submit"
													className="btn solid"
													value="Update"
													disabled={this.state.number === "" ? isSubmitting : true}
													
												/>
											</form>
										)}
									</Formik>
								</div>
							</Col>
						</Row>
					</Card>
				</div>
			</>
		);
	}
}
