const mysql = require('mysql2');

//local database

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",// Defined at mysql installation!
//     password: "1234", // same password of the DB
//     database: "intothecat" // Schema name
// });

//filess database

const connection = mysql.createConnection({
    host: "f40.h.filess.io",
    user: "intothecat_furniture",
    password: "5e56a8a481de530f4481bcae6fc9b178dea2b46d",
    database: "intothecat_furniture",
    port: 3307,

});

module.exports = connection;