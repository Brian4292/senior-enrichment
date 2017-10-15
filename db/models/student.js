const Sequelize = require('sequelize');
const db = require('../');
const Faker = require('faker');

const Student = db.define('student',{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true
	},
	github: {
		type: Sequelize.STRING,
		allowNull: true
	},
	// GPA: {
	// 	type: Sequelize.DECIMAL,
	// 	allowNull: false
	// }
});

module.exports =  Student;