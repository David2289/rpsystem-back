const pool = require('../pool');
const queries = require('../queries/studentQueries');
const fs = require('fs');
const path = require('path');

exports.getStudents = async (req, res) => {
    try {
        pool.query(queries.selectStudents(), (err, response) => {
            if (err) throw err;
            if(response) {
                res.json(response);
            }
            res.end();
        });
    } 
    catch(error) {
        return res.json(error);
    }
}


exports.getStudentById = async (req, res) => {
    let id = req.params.studentId;
    try {
        pool.query(queries.selectStudentById(id), (err, response) => {
            if (err) throw err;
            if(response) {
                if (response[0].photo) {
                    const fileName = + response[0].id + '-user.png';
                    fs.writeFileSync(path.join(__dirname, '../dbimages/' + fileName), response[0].photo) //create image file in dbimages/
                    const port = process.env.PORT;
                    response[0].photo = `http://localhost:${port}/${fileName}`
                }
                res.json(response);
            }
            res.end();
        });
    } 
    catch(error) {
        return res.json(error);
    }
}


exports.insertStudent = async (req, res) => {
    let student = req.body;
    try {
        pool.query(queries.insertStudent(student), (err, response) => {
            if (err) throw err;
            if(response) {
                res.json("Student was successfully created!");
            }
            res.end();
        });
    } 
    catch(error) {
        return res.json(error);
    }
}


exports.updateStudent = async (req, res) => {
    let id = req.params.studentId;
    let student = req.body;
    try {
        pool.query(queries.updateStudent(id, student), (err, response) => {
            if (err) throw err;
            if(response) {
                res.json("Student was successfully updated!");
            }
            res.end();
        });
    } 
    catch(error) {
        return res.json(error);
    }
}


exports.updateStudentPhoto = async (req, res) => {
    let id = req.params.studentId;
    const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))
    try {
        pool.query(queries.updateStudentPhoto(), [data, id], (err, response) => {
            if (err) return res.status(500).send('server error')
            if(response) {
                res.json({result: 'ok'})
            }
            res.end();
        });
    } 
    catch(error) {
        console.log('error')
        return res.json(error);
    }
}


exports.removeStudent = async (req, res) => {
    let id = req.params.studentId;
    try {
        pool.query(queries.deleteStudent(id), (err, response) => {
            if (err) throw err;
            if(response) {
                res.json("Student was successfully removed!");
            }
            res.end();
        });
    } 
    catch(error) {
        return res.json(error);
    }
}