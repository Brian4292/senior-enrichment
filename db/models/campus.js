const Sequelize = require('sequelize');
const db = require('../');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	image: {
		type: Sequelize.STRING,
		allowNull: false
		},
	content: {
		type: Sequelize.TEXT,
		allowNull: true
	}
});

module.exports =   Campus;