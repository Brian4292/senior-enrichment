const db = require('../db');
const Student = require('./db/models').Student;
const Campus = require('./db/models').Campus;
const Faker = require('faker');

// for(let i =0;i<20;i++){     //figure out how to use a seed file
// 	Student.create({   
// 	name: Faker.name.findName(),
// 	email :Faker.internet.email(),
// 	github: Faker.internet.userName(),
//   })
//   }

db.sync({force: true})
.then( () => {
  console.log('Seeding database');
  return seed();
})
.then( () => {
  console.log('Seeding successful');
},   err => {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally( () => {
  db.close();
  return null;
});