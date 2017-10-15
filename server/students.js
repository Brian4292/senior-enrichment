const express = require('express');
const router = express.Router();
module.exports = router;
Student = require('../db/models').Student



// router.get('/z', (req,res,next)=>{
//    res.send('ss')
// })

router.get('/', (req,res,next)=>{
    Student.findAll()
    .then(students => {
        res.json(students)
    });
});

router.get('/:id', (req,res,next)=>{
    const id = req.params.id
    Student.findById(id)
    .then(student => {
        res.json(student)
    });
});

router.post('/', (req,res,next)=>{
    Student.create(req.body)
    .then(createdStudent => {
        res.json(createdStudent)
    });
});

router.put('/', (req,res,next)=>{
    Student.update(req.body)
    .then(updatedStudent => {
        res.json(updatedStudent)
    });
});

router.delete('/:id', (req,res,next)=>{
    const id = req.params.id
    // Student.findById(id)
    // .then(studentToDelete => {
    //     console.log(studentToDelete)
    //     studentToDelete.destory();
    // });
    Student.destroy({
        where: {
            id:id
        }
    })
    .then(deleted => {
        res.json(deleted)
    })
});