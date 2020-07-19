import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function FooterLayout() {
	return (
		<>
			<Footer style={{ textAlign: "center" }}>
				Made with <span style={{ color: "#F60000" }}>&#9829;</span> by Yabi
				Francis | © 2020 EWIFarms. All rights reserved
			</Footer>
		</>
	);
}
