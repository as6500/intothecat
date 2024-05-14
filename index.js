// Dependencies of the project
const express = require('express');
const mysql = require("mysql2");
const app = express(); // Create a new instance of express
const path = require('path'); // Add this line to import the path module

const connection = require('./database');

const create = require ('./API/create')
const map = require('./API/map')
const movement = require('./API/movement')
const resets = require('./API/resets')
const views = require ('./API/views')


const serverPort = 3000;

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static("www"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/create',create)
app.use('/map', map)
app.use('/movement', movement)
app.use('/view',views)
app.use('/reset',resets)


// Connect to database and check if it's working. Otherwise we cry with the server.
connection.connect((err) => {
    if (err){
        console.log("💩 Error connection to DB: " + err);
        return;
    }
    console.log("🦄 Connected to database!");
})
app.listen(serverPort, () => {
    console.log('Server is running fast at ' + serverPort);
});












