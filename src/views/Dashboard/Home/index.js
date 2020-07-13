import React from "react";
import GradientBox from "./GradientBox";
import { Row, Col } from "antd";
import "./index.css";

export default function Home() {
	return (
		<>
			<div className="dashboard">
				<Row >
					<Col xs={{ span: 5 }} lg={{ span: 6 }}>
						<GradientBox />
					</Col>
					<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<GradientBox />
					</Col>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						<GradientBox />
					</Col>
				</Row>
			</div>
		</>
	);
}
