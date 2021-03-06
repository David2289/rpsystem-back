const express = require('express'); // To create HTTP server. With this version body-parser is deprecated and not needed.
const cors = require('cors'); // Enables cors to the api or the request from the app will return error.
const app = express();
const path = require('path');

/** middlewares **/
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
require('dotenv').config(); //Dotenv: to use env variables.

/** use dbimages from server **/
app.use(express.static(path.join(__dirname, 'dbimages')));

/** routes **/
const baseHost = '/api/students';
app.use(baseHost, require('./route/studentRouter'));

/** port **/
const port = process.env.PORT;

/** listen port**/
app.listen(port, () => {
    console.log(`Applicación de mysql corriendo en el port: ${port}`);
});