import React from "react";
import { Table } from "antd";
import axios from "../../../../util/axios";
import jwt_decode from "jwt-decode";

export default class History extends React.Component {

	render() {
		const columns = [
			{
				title: "Invoice No.",
				dataIndex: "invoice",
				width: 150,
			},
			{
				title: "Investment Amount",
				dataIndex: "amount",
				width: 150,
			},
			{
				title: "Interest",
				dataIndex: "interest",
			},
			{
				title: "Start Date",
				dataIndex: "date",
			},
			{
				title: "Payment Status",
				dataIndex: "payment",
			},
			{
				title: "Payout Status",
				dataIndex: "payout",
			},
		];

		let token = localStorage.usertoken;
		let decoded = jwt_decode(token);
		let data = [];

		axios
			.post("history", {
				email: decoded.email,
			})
			.then((res) => {
				
				res.data.historys.map((history) => {
					console.log("history", history);
						
					data.push({
						key: history.id,
						invoice: history.invoice,
						amount: history.amount,
						interest: history.amount,
						date: history.date,
						payment: "success",
						payout: "pending"
					});

					return data;
				});
			})
			.catch((err) => {
				console.log(err);
			});

			console.log("data", data);

		return (
			<>
				<div>
					<h2>Transaction History</h2>
					<Table
						columns={columns}
						dataSource={data}
						pagination={{ pageSize: 50 }}
						scroll={{ y: 240 }}
					/>
				</div>
			</>
		);
	}
}
