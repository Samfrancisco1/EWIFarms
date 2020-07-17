import React from "react";
import BannerVideo from "./BannerVideo";
import BannerText from "./BannerText";
import "./index.css";

export default function Banner() {
	return (
		<>
			<header id="home" className="banner">
				<BannerVideo />
				<BannerText />
			</header>
		</>
	);
}
