import React from "react";
import TotalCard from "./TotalCard";
import TotalReturn from "./TotalReturn";
import TotalPayout from "./TotalPayout";
import HowItWorks from "./HowItWorks";
import { Row, Col } from "antd";
import "./index.css";

export default function Home() {
	return (
		<>
			<div className="dashboard">
				<Row >
					<Col xs={{ span: 22, offset: 1 }} lg={{ span: 7 }}>
						<TotalCard />
					</Col>
					<Col xs={{ span: 22, offset: 1 }} lg={{ span: 7, offset: 1 }}>
						<TotalReturn />
					</Col>
					<Col xs={{ span: 22, offset: 1 }} lg={{ span: 7, offset: 1  }}>
						<TotalPayout />
					</Col>
					
				</Row>
				<HowItWorks />
			</div>
		</>
	);
}
