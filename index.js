// Dependencies of the project 
//hi 
const express = require('express');
const mysql = require("mysql2");
const app = express(); // Create a new instance of express
const path = require('path'); // Add this line to import the path module
const session = require('express-session');

const connection = require('./database');

const attacks = require('./API/attacks')
const game = require('./API/game')
const create = require ('./API/lobby')
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
app.use(session({
    secret:'justcabybara',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000000
    }
}))


app.use('/attack',attacks)
app.use('/game',game)
app.use('/lobby',create)
app.use('/map', map)
app.use('/movement', movement)
app.use('/reset',resets)
app.use('/views',views)


app.get('/counter',(req, res) =>{
    if (req.session.counter){
        req.session.counter++;
    }
    else{
        req.session.counter = 1;
    }
    res.send('counter: ' + req.session.counter);
})

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












