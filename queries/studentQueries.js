
exports.selectStudents = () => {
    return `
    SELECT id, fname, mname, lname, 
    fsurname, lsurname, email, sex, 
    DATE_FORMAT(birth, '%Y-%m-%d %H:%i:%s') AS birth, 
    DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') AS regdate, 
    section, observation 
    FROM students`
}

exports.selectStudentById = (id) => {
    return `SELECT * FROM students WHERE id = '${id}'`
}

exports.insertStudent = (student) => {
    return `
    INSERT INTO students (fname, mname, lname, fsurname, lsurname, email, sex, birth, regdate, section, observation) 
    VALUES(
        '${student.fname}', 
        '${student.mname}', 
        '${student.lname}', 
        '${student.fsurname}', 
        '${student.lsurname}', 
        '${student.email}', 
        '${student.sex}', 
        '${student.birth}', 
        '${student.regdate}', 
        '${student.section}', 
        '${student.observation}'
    )`
}

exports.updateStudent = (id, student) => {
    return "UPDATE students SET " + 
    (student.fname == undefined ? "" : "fname = '" + student.fname + "' ") + 
    (student.fname != undefined && student.mname != undefined ? ", " : "") + 
    (student.mname == undefined ? "" : "mname = '" + student.mname + "' ") + 
    (student.mname != undefined && student.lname != undefined ? ", " : "") + 
    (student.lname == undefined ? "" : "lname = '" + student.lname + "' ") + 
    (student.lname != undefined && student.fsurname != undefined ? ", " : "") + 
    (student.fsurname == undefined ? "" : "fsurname = '" + student.fsurname + "' ") + 
    (student.fsurname != undefined && student.lsurname != undefined ? ", " : "") + 
    (student.lsurname == undefined ? "" : "lsurname = '" + student.lsurname + "' ") + 
    (student.lsurname != undefined && student.email != undefined ? ", " : "") + 
    (student.email == undefined ? "" : "email = '" + student.email + "' ") + 
    (student.email != undefined && student.sex != undefined ? ", " : "") + 
    (student.sex == undefined ? "" : "sex = '" + student.sex + "' ") + 
    (student.sex != undefined && student.birth != undefined ? ", " : "") + 
    (student.birth == undefined ? "" : "birth = '" + student.birth + "' ") + 
    (student.birth != undefined && student.regdate != undefined ? ", " : "") + 
    (student.regdate == undefined ? "" : "regdate = '" + student.regdate + "' ") + 
    (student.regdate != undefined && student.section != undefined ? ", " : "") + 
    (student.section == undefined ? "" : "section = '" + student.section + "' ") + 
    "WHERE id = '" + id + "'"
}

exports.deleteStudent = (id) => {
    return `DELETE from students WHERE id = '${id}'`
}
