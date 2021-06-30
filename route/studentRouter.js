const express = require('express');
const router = express.Router();
const { 
    getStudents, 
    getStudentById, 
    insertStudent, 
    updateStudent, 
    removeStudent 
} = require('../controller/studentController');


router.get('/', getStudents);
router.get('/:studentId', getStudentById);
router.post('/create', insertStudent);
router.post('/update/:studentId', updateStudent);
router.delete('/remove/:studentId', removeStudent);


module.exports = router;