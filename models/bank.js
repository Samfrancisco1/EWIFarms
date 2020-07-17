const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
	"bank",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
		},
		bank: {
			type: Sequelize.STRING,
		},
		account: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
	}
);
