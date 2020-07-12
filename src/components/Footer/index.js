import React from "react";

export default function Footer() {
	return (
		<>
			<section
				className="footer"
				style={{
					width: "100%",
					height: "50px",
					backgroundColor: "rgb(185, 29, 115)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
				}}
			>
				<p style={{ marginTop: "15px" }}>
					Made with <span style={{ color: "#F60000" }}>&#9829;</span> by Yabi
					Francis | © 2020 EWIFarms. All rights reserved
				</p>
			</section>
		</>
	);
}
