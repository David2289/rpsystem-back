const express = require('express');
const multer = require('multer');
const { 
    getStudents, 
    getStudentById, 
    insertStudent, 
    updateStudent, 
    updateStudentPhoto, 
    removeStudent 
} = require('../controller/studentController');

const router = express.Router();
const path = require('path');


const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image') //Same of formdata defined in frontend side


router.get('/', getStudents);
router.get('/:studentId', getStudentById);
router.post('/create', insertStudent);
router.post('/update/:studentId', updateStudent);
router.post('/update/:studentId/photo', fileUpload, updateStudentPhoto);
router.delete('/remove/:studentId', removeStudent);


module.exports = router;