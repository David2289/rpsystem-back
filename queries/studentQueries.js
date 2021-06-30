
exports.selectStudents = () => {
    return `
    SELECT id, fname, mname, lname, 
    fsurname, lsurname, sex, age, 
    DATE_FORMAT(birth, '%Y-%m-%d %H:%i:%s') AS birth, 
    DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') AS regdate, 
    section 
    FROM students`
}

exports.selectStudentById = (id) => {
    return `SELECT * FROM students WHERE id = '${id}'`
}

exports.insertStudent = (student) => {
    return `
    INSERT INTO students (fname, mname, lname, fsurname, lsurname, sex, age, birth, section) 
    VALUES(
        '${student.fname}', 
        '${student.mname}', 
        '${student.lname}', 
        '${student.fsurname}', 
        '${student.lsurname}', 
        '${student.sex}', 
        '${student.age}', 
        '${student.birth}', 
        '${student.section}'
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
    (student.lsurname != undefined && student.sex != undefined ? ", " : "") + 
    (student.sex == undefined ? "" : "sex = '" + student.sex + "' ") + 
    (student.sex != undefined && student.age != undefined ? ", " : "") + 
    (student.age == undefined ? "" : "age = '" + student.age + "' ") + 
    (student.age != undefined && student.birth != undefined ? ", " : "") + 
    (student.birth == undefined ? "" : "birth = '" + student.birth + "' ") + 
    (student.birth != undefined && student.section != undefined ? ", " : "") + 
    (student.section == undefined ? "" : "section = '" + student.section + "' ") + 
    "WHERE id = '" + id + "'"
}

exports.deleteStudent = (id) => {
    return `DELETE from students WHERE id = '${id}'`
}
