const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post('/user', (req, res) => {

    var playerUsername = req.body.playerUsername;
    var playerNickname = req.body.playerNickname;
    var playerPassword = req.body.playerPassword;

    if (!playerUsername || !playerNickname || !playerPassword){
        res.send("Missing data");
        return;
    }
    // Check if the playerName already exists in the database
    connection.execute('SELECT * FROM player WHERE pla_username = ? and pla_nickname = ?',
        [playerUsername, playerNickname],
        function (err, results, fields) {

            if (results.length == 0){
                createAccount(req, res, playerUsername, playerNickname, playerPassword);
            }
            
            else{
                res.send("Username or nickname already picked!");
            }
        }
    );
});

function createAccount(req, res, playerUsername, playerNickname, playerPassword){

    connection.execute('INSERT INTO player (pla_username, pla_nickname, pla_password) VALUES (?,?,?)',
        [playerUsername, playerNickname, playerPassword],
        function (err, results, fields) {
            if (err){
                res.send(err);
            }
            
            else{
                res.send("Account created - " +playerUsername+ " " +playerNickname +" "+playerPassword);
            }
        }
    );
}

module.exports = router;