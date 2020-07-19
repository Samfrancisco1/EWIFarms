const express = require("express");
const Transactions = express.Router();
const cors = require("cors");

const Transaction = require("../models/transaction");
Transactions.use(cors());

process.env.SECRET_KEY = "secret";

Transactions.post("/deposit", (req, res) => {
	const today = new Date();
	const transactionData = {
		email: req.body.email,
		amount: req.body.amount,
        invoice: req.body.invoice,
        type: req.body.type,
		date: today,
	};

	Transaction.create(transactionData)
		.then((data) => {
			res.json({ status: data.type + "Inserted!" });
		})
		.catch((err) => {
			res.send("error: " + err);
		});
});

module.exports = Transactions;
