const mysql = require('mysql2');
const express = require('express');


const dbConfig = {
    host: 'localhost',
    user: 'your_user', // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'your_database_name', // Replace with your database name
};

const pool = mysql. createConnection(dbConfig);
module.exports = pool;