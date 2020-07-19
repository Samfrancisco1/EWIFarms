const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user");
const Transaction = require("../models/transactions");
const Bank = require("../models/bank");

users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
	const today = new Date();
	const userData = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		image: req.body.image,
		created: today,
	};

	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		//TODO bcrypt
		.then((user) => {
			if (!user) {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					userData.password = hash;
					User.create(userData)
						.then((user) => {
							res.json({ status: user.email + "Registered!" });
						})
						.catch((err) => {
							res.send("error: " + err);
						});
				});
			} else {
				res.json({ error: "User already exists" });
			}
		})
		.catch((err) => {
			res.send("error: " + err);
		});
});

users.post("/login", (req, res) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (user) {
				if (bcrypt.compareSync(req.body.password, user.password)) {
					let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
						expiresIn: 1440,
					});
					res.send(token);
				}
			} else {
				res.status(400).json({ error: "User does not exist" });
			}
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
});

users.post("/deposit", (req, res) => {
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

users.post("/history", (req, res) => {
	Transaction.findAll({
		where: {
			email: req.body.email,
		},
	})
		.then((response) => {
			if (response) {
				res.json({ results: response });
			} else {
				res.status(400).json({ error: "No record found" });
			}
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
});

users.post("/bank", (req, res) => {
	const bankData = {
		name: req.body.name,
		email: req.body.email,
		account: req.body.number,
		bank: req.body.bank,
	};

	Bank.findOne({
		where: {
			email: req.body.email,
		},
	})
		//TODO bcrypt
		.then((bankDetails) => {
			if (!bankDetails) {
				Bank.create(bankData)
					.then((bankDetails) => {
						res.json({ status: "Bank Details inserted successfully!" });
					})
					.catch((err) => {
						res.send("error: " + err);
					});
			} else {
				res.json({ error: "Bank account already exists" });
			}
		})
		.catch((err) => {
			res.send("error: " + err);
		});
});

users.post("/bank_details", (req, res) => {
	Bank.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((bank_details) => {
			if (bank_details) {
				let token = jwt.sign(bank_details.dataValues, process.env.SECRET_KEY, {
					expiresIn: 1440,
				});
				res.send(token);
			} else {
				res.status(400).json({ error: "User does not exist" });
			}
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
});

module.exports = users;
