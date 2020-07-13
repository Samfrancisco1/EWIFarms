import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Row, Col, Card } from "antd";
import "./index.css";

export default function HowItWorks() {
	return (
		<Card
			style={{
				marginTop: 50,
				borderRadius: 10,
				boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) ",
				transition: "0.3s",
			}}
		>
			<Row>
				<Col span={24}>
					<div className="how-content">
						<h2>How EWIFarms Works</h2><br />
						<label> <CheckOutlined /> Sign up for Ethel Women Initiative Farms </label><br />
						<label> <CheckOutlined /> Set how much you would to invest</label><br />
						<label> <CheckOutlined /> Make payment for investment</label><br />
						<label> <CheckOutlined /> Wait to investment matures and collect your ROI</label><br />
					</div>
				</Col>
			</Row>
			<Row></Row>
		</Card>
	);
}
