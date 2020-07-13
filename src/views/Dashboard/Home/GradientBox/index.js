import React from "react";
import { Card } from "antd";
import "./index.css";
import {
	DollarOutlined,

} from "@ant-design/icons";

export default function GradientBox() {
	return (
		<>
			<div>
				<Card >
                    <div className="card-icon">
                         <DollarOutlined />
                    </div>
                </Card>
			</div>
		</>
	);
}
