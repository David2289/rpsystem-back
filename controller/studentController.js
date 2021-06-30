const pool = require('../pool');
const queries = require('../queries/studentQueries');

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