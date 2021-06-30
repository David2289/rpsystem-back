const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log('Something went wrong during connection attempt');
    }
    if (connection) {
        connection.release();
    }
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;