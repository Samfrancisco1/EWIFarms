import React, { Component } from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";

import "./index.css";

export default class BannerText extends Component {
	render() {
		return (
			<>
				<div className="banner-text">
					<h2>EWI FARMS HELPS YOU </h2>
					<h2 className="typewriter">
						<Typical
							steps={[
								"INVEST MONEY!",
								2000,
								"EARN MONEY!",
								2000,
								"SAVE MONEY!",
								2000,
							]}
							loop={Infinity}
							wrapper="p"
						/>
					</h2>
					<h4>
						Join us today and start your journey in earning rewarding returns in
						the agricultural section of the country without doing the heavy
						lefting.
					</h4>
					<div className="banner-button">
						<Link to="/auth" className="get-started-btn" >
							Get Started
						</Link>
					</div>
				</div>
				<div className="opacity-background"> </div>
			</>
		);
	}
}
