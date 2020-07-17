import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../../util/axios";


import "./index.css";
import { UserOutlined, EyeOutlined } from "@ant-design/icons";

import login from "../../assets/images/login.svg";
import register from "../../assets/images/register.svg";

export default class Auth extends Component {
	constructor(props) {
		super(props);

		this.registerClick = this.registerClick.bind(this);
		this.loginClick = this.loginClick.bind(this);
	}

	registerClick() {
		const auth = document.querySelector(".auth");
		auth.classList.add("sign-up-mode");
	}

	loginClick() {
		const auth = document.querySelector(".auth");
		auth.classList.remove("sign-up-mode");
	}

	componentDidMount(){
		const token = localStorage.usertoken;
		if(token != null){
			this.props.history.push(`/dashboard`);
		}
	}

	render() {
		const SignupSchema = Yup.object().shape({
			name: Yup.string()
				.min(2, "Too Short!")
				.max(80, "Too Long!")
				.required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			phone: Yup.number()
				.typeError("That doesn't look like a phone number")
				.positive("A phone number can't start with a minus")
				.integer("A phone number can't include a decimal point")
				.min(8)
				.required("A phone number is required"),
			password: Yup.string()
				.min(8, "Password is too short")
				.max(30, "Long passwords are easy too forget")
				.required("Please insert a password"),
		});

		const SigninSchema = Yup.object().shape({
			email: Yup.string().email("Invalid email").required("Required"),
			password: Yup.string()
				.min(8, "Password is too short")
				.max(30, "Long passwords are easy too forget")
				.required("Please insert a password"),
		});
		return (
			<>
				<div className="auth">
					<div className="forms-container">
						<div className="signin-signup">
							<Formik
								initialValues={{
									email: "",
									password: "",
								}}
								validationSchema={SigninSchema}
								onSubmit={(values, { setSubmitting, resetForm }) => {
									setSubmitting(true);
									console.log(values);
									axios
										.post("login", {
											email: values.email,
											password: values.password,
										})
										.then((res) => {
											localStorage.setItem("usertoken", res.data);
											this.props.history.push(`/dashboard`);
											return res.data;
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
									<form onSubmit={handleSubmit} className="sign-in-form">
										<h2 className="title">Sign in</h2>
										<div className="input-field">
											<UserOutlined className="auth-icon" />
											<input
												type="email"
												name="email"
												placeholder="Enter Email"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												className={
													touched.email && errors.email ? "has-error" : null
												}
											/>
										</div>
										<div className="input-field">
											<EyeOutlined className="auth-icon" />
											<input
												type="password"
												name="password"
												placeholder="Enter Password"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.password}
												className={
													touched.password && errors.password
														? "has-error"
														: null
												}
											/>
										</div>
										<input
											type="submit"
											value="Login"
											disabled={isSubmitting}
											className="btn solid"
										/>
									</form>
								)}
							</Formik>
							<Formik
								initialValues={{
									name: "",
									email: "",
									phone: "",
									password: "",
									image: "",
								}}
								validationSchema={SignupSchema}
								onSubmit={(values, { setSubmitting, resetForm }) => {
									setSubmitting(true);
									console.log(values);

									axios
										.post("register", {
											name: values.name,
											email: values.email,
											phone: values.phone,
											password: values.password,
											image: values.image,
										})
										.then((res) => {
											resetForm();
											localStorage.setItem("usertoken", res.data);
											return res.data;
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
									<form onSubmit={handleSubmit} className="sign-up-form">
										<h2 className="title">Sign up</h2>
										<div className="input-field">
											<i className="fas fa-user"></i>
											<input
												type="text"
												name="name"
												placeholder="Enter Name"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.name}
												className={
													touched.name && errors.name ? "has-error" : null
												}
											/>
										</div>
										<div className="input-field">
											<i className="fas fa-envelope"></i>
											<input
												type="email"
												name="email"
												placeholder="Enter Email"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												className={
													touched.email && errors.email ? "has-error" : null
												}
											/>
										</div>
										<div className="input-field">
											<i className="fas fa-user"></i>
											<input
												type="number"
												name="phone"
												placeholder="Enter Phone Number"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.phone}
												className={
													touched.phone && errors.phone ? "has-error" : null
												}
											/>
										</div>
										<div className="input-field">
											<i className="fas fa-lock"></i>
											<input
												type="password"
												name="password"
												placeholder="Enter Password"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.password}
												className={
													touched.password && errors.password
														? "has-error"
														: null
												}
											/>
										</div>
										<input
											type="submit"
											className="btn solid"
											value="Sign up"
											disabled={isSubmitting}
										/>
									</form>
								)}
							</Formik>
						</div>
					</div>

					<div className="panels-container">
						<div className="panel left-panel">
							<div className="content">
								<h3>Dont have an account?</h3>
								<p>
									Click on the sign up button below to create and account and
									start earning
								</p>
								<button
									onClick={this.registerClick}
									className="btn transparent"
									id="sign-up-btn"
								>
									Sign up
								</button>
							</div>
							<img src={login} className="image" alt="" />
						</div>
						<div className="panel right-panel">
							<div className="content">
								<h3>Already a member?</h3>
								<p>
									Enter you login credentials to get access to your account.
								</p>
								<button
									onClick={this.loginClick}
									className="btn transparent"
									id="sign-in-btn"
								>
									Sign in
								</button>
							</div>
							<img src={register} className="image" alt="" />
						</div>
					</div>
				</div>
			</>
		);
	}
}
