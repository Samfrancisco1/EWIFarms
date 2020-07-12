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
				<div class="auth">
					<div class="forms-container">
						<div class="signin-signup">
							<form action="#" class="sign-in-form">
								<h2 class="title">Sign in</h2>
								<div class="input-field">
									<i class="fas fa-user"></i>
									<input type="text" placeholder="Username" />
								</div>
								<div class="input-field">
									<i class="fas fa-lock"></i>
									<input type="password" placeholder="Password" />
								</div>
								<input type="submit" value="Login" class="btn solid" />
	
							</form>
							<form action="#" class="sign-up-form">
								<h2 class="title">Sign up</h2>
								<div class="input-field">
									<i class="fas fa-user"></i>
									<input type="text" placeholder="Username" />
								</div>
								<div class="input-field">
									<i class="fas fa-envelope"></i>
									<input type="email" placeholder="Email" />
								</div>
								<div class="input-field">
									<i class="fas fa-lock"></i>
									<input type="password" placeholder="Password" />
								</div>
								<input type="submit" class="btn" value="Sign up" />

							</form>
						</div>
					</div>

					<div class="panels-container">
						<div class="panel left-panel">
							<div class="content">
								<h3>Dont have an account?</h3>
								<p>
									Click on the sign up button below to create and account and start earning
								</p>
								<button onClick={ this.registerClick } class="btn transparent" id="sign-up-btn">
									Sign up
								</button>
							</div>
							<img src={ login } class="image" alt="" />
						</div>
						<div class="panel right-panel">
							<div class="content">
								<h3>Already a member?</h3>
								<p>
									Enter you login credentials to get access to your account.
								</p>
								<button onClick={ this.loginClick } class="btn transparent" id="sign-in-btn">
									Sign in
								</button>
							</div>
							<img src={register} class="image" alt="" />
						</div>
					</div>
				</div>
			</>
		);
	}
}
