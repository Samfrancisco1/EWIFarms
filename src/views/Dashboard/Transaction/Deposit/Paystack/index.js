import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { List } from "antd";
import jwt_decode from "jwt-decode";
import axios from "../../../../../util/axios";
import "./index.css";

export default function Paystack() {
	let token = localStorage.usertoken;
	let publicKey = "pk_test_f6f2dc3bd34ccb1e1a6f8da42cf27061767c535c";
	let amount = parseInt(localStorage.depositAmount) * 100;
	let decoded = jwt_decode(token);
	let name = decoded.name;
	let email = decoded.email;
	let phone = decoded.phone;
	let date = Date();
	let invoice = Date.now();

	const data = [
		{
			title: "Company Name",
			text: "EWIFarms",
		},
		{
			title: "Name",
			text: decoded.name,
		},
		{
			title: "Email Address",
			text: decoded.email,
		},
		{
			title: "Phone Number",
			text: decoded.phone,
		},
		{
			title: "Amount",
			text: "NGN" + parseInt(amount) / 100,
		},
		{
			title: "Date",
			text: date,
		},
		{
			title: "Invoice Number",
			text: "SN - " + invoice,
		},
	];

	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () => {
            axios.post("./deposit", {
                
            })
        },
		onClose: () => alert("Are you sure you want to leave"),
	};

	return (
		<>
			<div>
				<h4>Pay with Paystack</h4>

				<List
					itemLayout="horizontal"
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta title={item.title} description={item.text} />
						</List.Item>
					)}
				/>
				<PaystackButton className="paystack-button" {...componentProps} />
			</div>
		</>
	);
}
