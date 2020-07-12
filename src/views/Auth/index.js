import React, { Component } from "react";
import "./index.css";

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

	render() {
		return (
			<>
				<div className="auth">
					<div className="forms-container">
						<div className="signin-signup">
							<form action="#" className="sign-in-form">
								<h2 className="title">Sign in</h2>
								<div className="input-field">
									<i className="fas fa-user"></i>
									<input type="text" placeholder="Username" />
								</div>
								<div className="input-field">
									<i className="fas fa-lock"></i>
									<input type="password" placeholder="Password" />
								</div>
								<input type="submit" value="Login" className="btn solid" />
							</form>
							<form action="#" className="sign-up-form">
								<h2 className="title">Sign up</h2>
								<div className="input-field">
									<i className="fas fa-user"></i>
									<input type="text" placeholder="Username" />
								</div>
								<div className="input-field">
									<i className="fas fa-envelope"></i>
									<input type="email" placeholder="Email" />
								</div>
								<div className="input-field">
									<i className="fas fa-lock"></i>
									<input type="password" placeholder="Password" />
								</div>
								<input type="submit" className="btn solid" value="Sign up" />
							</form>
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
									class="btn transparent"
									id="sign-up-btn"
								>
									Sign up
								</button>
							</div>
							<img src={login} class="image" alt="" />
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
