const express = require('express');
const router = express.Router();
module.exports = router;
Student = require('../db/models').Student;

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.json(students);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Student.findById(id)
    .then(student => {
      res.json(student);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => {
      res.json(createdStudent);
    })
    .catch(next);
});

router.put('/', (req, res, next) => {
  Student.update(req.body)
    .then(updatedStudent => {
      res.json(updatedStudent);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Student.destroy({
    where: {
      id: id
    }
  })
    .then(() => {
      res.send('deleted');
    })
    .catch(next);
});
