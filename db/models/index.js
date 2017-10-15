'use strict';
const Sequelize = require('sequelize');
const db = require('../');
const Faker = require('faker');
const Student = require('./student');
const Campus = require('./campus');

//Campus.hasMany(Student)
Student.belongsTo(Campus);

  
// for(let i =0;i<100;i++){     figure out how to use a seed file
// 	Student.create({   
// 	name: Faker.name.findName(),
// 	email :Faker.internet.email(),
// 	github: Faker.internet.userName(),
//   })
//   }



// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations


module.exports = {db, Student, Campus}