import React from "react";
import { Card } from "antd";
import "./index.css";
import { DollarOutlined } from "@ant-design/icons";

export default function TotalCard() {
	return (
		<>
			<div>
				<Card
					style={{
						borderRadius: 10,
						boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) ",
						transition: "0.3s",
					}}
				>
					<div className="card-container">
						<div className="card-icon">
							<DollarOutlined
								size={64}
								style={{
									color: "#fff",
									fontSize: "60px",
									textAlign: "center",
									marginTop: "8px",
									marginLeft: "24px",
								}}
							/>
						</div>
						<div className="card-content">
							<div className="card-title">
								<p>Amount Invested</p>
							</div>
							<div className="card-amount">
								<p>NGN 500,000.00</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
