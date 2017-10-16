const express = require('express');
const router = express.Router();
module.exports = router;
Campus = require('../db/models/').Campus;
Student = require('../db/models').Student;


router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campus => {
      res.json(campus);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {   //refactor to use includes  use .all 
  const id = req.params.id;
  Student.findAll({
      where:{
        campusId:id
      }
  })
    .then(Campus => {
      res.json(Campus);
    })
    .catch(next);
});



// router.get('/:id', (req, res, next) => {   //refactor to use includes  use .all 
//   const id = req.params.id;
//   Campus.findById({
//       include: [
//         {include: [{all: true}]}
//       ]
//   })
//     .then(Campus => {
//       console.log(Campus)
//       res.json(Campus);
//     })
//     .catch(next);
// });

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(createdCampus => {
      res.json(createdCampus);
    })
    .catch(next);
});

router.put('/', (req, res, next) => {
  Campus.update(req.body)
    .then(updatedCampus => {
      res.json(updatedCampus);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Campus.destroy({
    where: {
      id: id
    }
  })
    .then(() => {
      res.send('deleted');
    })
    .catch(next);
});
