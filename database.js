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
    host: "kye.h.filess.io",
    user: "intothecat_yourcolumn",
    password: "36b4d8c7fd3fd728b5204a529155146566b0c519",
    database: "intothecat_yourcolumn",
    port: 3307,
});

module.exports = connection;