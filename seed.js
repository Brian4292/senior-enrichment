const db = require('./db');
const Student = require('./db/models').Student;
const Campus = require('./db/models').Campus;
const Faker = require('faker');


// Campus.bulkCreate([{
//     name: 'WDF',
//     image: './img/Campus1.png',
//     content: Faker.lorem.paragraph(3)
// }, {
//     name: 'Fullstack',
//     image: './img/Campus2.png',
//     content: Faker.lorem.paragraph(3)
// }, {
//     name: 'GraceHooper',
//     image: './img/Campus3.png',
//     content: Faker.lorem.paragraph(3)
// }, {
//     name: 'Remote',
//     image: './img/Campus4.png',
//     content: Faker.lorem.paragraph(3)
// }
// ]);
function seed (){
    const students = []
    for (let i = 0; i < 30; i++) {
      //figure out how to use a seed file
      students.push(Student.create({
        name: Faker.name.findName(),
        email: Faker.internet.email(),
        github: Faker.internet.userName(),
        image: Faker.image.avatar(),
        content: Faker.lorem.paragraph(3),
        campusId: Math.floor(Math.random() * 4) + 1
      }));
    }
    return students;
}

db.sync({force: true})
.then( () => {
  console.log('Seeding database');
   return Campus.bulkCreate([{
    name: 'WDF',
    image: './img/Campus1.png',
    content: Faker.lorem.paragraph(3)
}, {
    name: 'Fullstack',
    image: './img/Campus2.png',
    content: Faker.lorem.paragraph(3)
}, {
    name: 'GraceHooper',
    image: './img/Campus3.png',
    content: Faker.lorem.paragraph(3)
}, {
    name: 'Remote',
    image: './img/Campus4.png',
    content: Faker.lorem.paragraph(3)
}
]);
})
.then( () => {
    return Promise.all(seed())
  //console.log('Seeding successful');
})
.then( (students) => {
  db.close();
  return null;
});
