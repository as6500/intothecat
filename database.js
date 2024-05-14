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
    host: "gsn.h.filess.io",
    user: "intothecat_metthingno",
    password: "34d13355f210d75747a52064890129380176f608",
    database: "intothecat_metthingno",
    port: 3307,

});

module.exports = connection;