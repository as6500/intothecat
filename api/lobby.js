const express = require('express');
const router = express.Router();
const connection = require('../database');

//register
router.post('/register', (req, res) => {
    //preciso disto?
    var playerUsername = req.body.username?.trim();
    var playerNickname = req.body.nickname?.trim();
    var playerPassword = req.body.password?.trim();
    var playerPassword2 = req.body.password2?.trim();

    if (!playerUsername || !playerNickname || !playerPassword || !playerPassword2){
        res.status(400).send({
            "error": "Missing data"
        });
        return;
    }
    //checks if the passwords match
    if (playerPassword != playerPassword2){
        res.status(400).send({
            "error": "Password don't match"
        });
        return;
    }
    function check_user() {

        console.log("function: check_user")

        // Check if the playerName already exists in the database
        connection.execute('select * from player where pla_username = ? and pla_nickname = ?',
        [playerUsername, playerNickname],
            function (err, results, fields) {

                if (results.length == 0){
                    create_account()
                }
                
                else{
                    res.status(406).send({
                        "error": "Nickname or username already exists"
                    });
                    return;
                }
            }
        )
    }

    function create_account(){

        console.log("function: create_account")

        connection.execute('insert into player (pla_username, pla_nickname, pla_password, pla_queue) values (?,?,?,1)',
        [playerUsername, playerNickname, playerPassword],
            function (err, results, fields) {
                if (err){
                    res.send(err)
                    return
                }
                
                else{
                    console.log("Account created - " +playerUsername+ " " +playerNickname +" "+playerPassword)

                    res.status(200).send({
                        "message": "Account created"
                    });
                    return;
                }
            }
        )
    }
    check_user()
})

//login
router.post('/login', (req, res) => {
    var playerUsername = req.body.username;
    var playerPassword = req.body.password;

    function Login(){

        console.log("function: Login")

        connection.execute('select * from player where pla_username = ? and pla_password = ?',
        [playerUsername, playerPassword],
            function (err, rows) {

                if (err){
                    res.send(err);
                }
                if(rows.length == 0){
                    res.status(400).send({
                        "error": "Player username or password is incorrect"
                    });
                    return;
                }
                if(rows.length == 1){
                    req.session.playerUsername = playerUsername
                    req.session.nickname = rows[0].pla_nickname
                    req.session.playerID = rows[0].pla_id   
                    res.status(200).send({
                        "message": "Successfully logged in"
                    });
                    return;
                }
            }
        )
    }
    Login()
})

router.post('/joinMatch', (req, res) => {

    
    var playerUsername = req.session.playerUsername

    var player1ID
    var player2ID
    var lastMatch
    var nextMatch
    var pm1ID
    var pm2ID

    if (playerUsername == null){
            res.status(403).send({
                "error": "Invalid player username"
        })
        return
    }

    function GetPlayerID() {

        console.log('function: GetPlayerID')

        connection.execute('select * from player where pla_username = ?',
        [playerUsername],
            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                Check_queue_permission()
            }
        )
    }

    function Check_queue_permission(){

        console.log('function: Check_queue_permission')

        connection.execute('select * from matches_with_turn_name where username = ? and mat_end is null',
        [playerUsername],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                if(rows.length == 0){
                    queue_approved()
                    return;
                }

                if(rows.length == 1 || rows.length == 2){
                    //check message number
                    req.session.matchID = rows[0].match_id
                    res.status(302).send({
                        "message": "You are already in an ongoing game"
                    });
                    return;
                }

                res.status(500).send({
                    "error": "Not supposed to happen rows.length=" + rows.length
                })
            }
        )
    }

 
    function queue_approved(){

        console.log('function: queue_approved')

        connection.execute('update player set pla_queue = 2 where pla_username = ?',
        [playerUsername],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                search_for_two_queueing_players()
            }
        )
    }

    function search_for_two_queueing_players(){

        console.log('search_for_two_queueing_players')

        connection.execute(`with CTE AS (
        select *, row_number() over (partition by (case when pla_username = ? then ? else 'other' end)) as row_num
        from player where pla_queue = 2)
        select * from CTE
        where (pla_username = ? and row_num = 1)
        or (pla_username <> ? and row_num = 1)
        limit 2;`,
        [playerUsername, playerUsername, playerUsername, playerUsername],
            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                if(rows.length == 0){
                    res.status(400).send({
                        "error": "weird as hell"
                    });
                    return;
                }
                if(rows.length == 1){
                    res.status(201).send({
                        "message": "Only you in queue"
                    });
                    return;
                }
                if(rows.length == 2){

                    player1ID=rows[0].pla_id
                    player2ID=rows[1].pla_id

                    step_one_check_match()
                    return;
                }
            }
        )

    }

 

    function step_one_check_match(){

        console.log('function: step_one_check_match')

        connection.execute('select * from matxh order by mat_number desc limit 2',

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                lastMatch =rows[0].mat_number
                nextMatch = lastMatch + 1
                console.log('next match: ' + nextMatch)
                console.log('last match: '+ lastMatch)

                step_two_create_match()
            }
        )
    }

    function step_two_create_match(){

        console.log('function: step_two_create_match')

        connection.execute('insert into matxh (mat_number, mat_start, mat_end) values (?, now(), null)',
        [nextMatch],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                step_three_create_playermatch_one()
            }
        )
    }

    function step_three_create_playermatch_one(){

        console.log('function: step_three_create_playermatch_one')

        connection.execute('insert into playermatch (pm_health, pm_pla_id, pm_mat_id, pm_turn_id) values (20, ?, ?, 1)',
        [player1ID, nextMatch],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                step_four_create_playermatch_two()
            }
        )
    }

    function step_four_create_playermatch_two(){

        console.log('function: step_four_create_playermatch_two')

        connection.execute('insert into playermatch (pm_health, pm_pla_id, pm_mat_id, pm_turn_id) values (20, ?, ?, 1)',
        [player2ID, nextMatch],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                little_pm_check()
            }
        )
    }

    function little_pm_check(){

        console.log('function: little_pm_check')

        connection.execute('select * from playermatch where pm_mat_id = ? order by pm_id asc',
        [nextMatch],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                if (rows.length < 2){
                    console.log("Shouldnt happen");
                    res.send(500).send("Opsi Dopsi on little_pm_check")
                    return;
                }

                pm1ID = rows[0].pm_id
                pm2ID = rows[1].pm_id
                step_five_create_location_one()
            }
        )
    }
    //check tile values for next 4 functions
    function step_five_create_location_one(){

        console.log('function: step_five_create_location_one')

        connection.execute('insert into location (loc_pawn_id, loc_pm_id, loc_tbo_id, loc_moved, loc_attacked) values (1, ?, 215, 0, 0)',
        [pm1ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                step_six_create_location_two()
            }
        )
    }

    function step_six_create_location_two(){

        console.log('function: step_six_create_location_two')

        connection.execute('insert into location (loc_pawn_id, loc_pm_id, loc_tbo_id, loc_moved, loc_attacked) values (2, ?, 220, 0, 0)',
        [pm1ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                step_seven_create_location_three()
            }
        )
    }

    function step_seven_create_location_three(){

        console.log('function: step_seven_create_location_three')

        connection.execute('insert into location (loc_pawn_id, loc_pm_id, loc_tbo_id, loc_moved, loc_attacked) values (1, ?, 10, 0, 0)',
        [pm2ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                
                step_eight_create_location_four()
            }
        )
    }

    function step_eight_create_location_four(){

        console.log('function: step_eight_create_location_four')

        connection.execute('insert into location (loc_pawn_id, loc_pm_id, loc_tbo_id, loc_moved, loc_attacked) values (2, ?, 5, 0, 0)',
        [pm2ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                remove_player1_queue()
                
                
            }
        )
    }

    function remove_player1_queue(){
        
        console.log('function: remove_player1_queue')

        connection.execute('update player set pla_queue = 1 where pla_id = ?',
        [player1ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                remove_player2_queue()
            }
        )
    }

    function remove_player2_queue(){
        
        console.log('function: remove_player2_queue')

        connection.execute('update player set pla_queue = 1 where pla_id = ?',
        [player2ID],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }
                req.session.matchID = nextMatch
                res.status(200).send({
                    "message": "success"

                });
                return;
            }
        )
    }
    GetPlayerID()
})






router.get('/queue', (req, res) => {

    var playerUsername = req.session.playerUsername

    if (playerUsername == null){
        res.status(403).send({
            "error": "Invalid player username"
        })
        return
    }


    function check_if_ready(){

        console.log('function: check_if_ready')

        connection.execute('select * from matches_with_turn_name where username = ? and mat_end is null',
        [playerUsername],

            function (err, rows) {
                if(err) {
                    res.send(err)
                    return 
                }

                if(rows.length == 0){
                    res.status(400).send({
                        "error": "No match found yet"
                    });
                    return;
                }

                if(rows.length == 1 || rows.length == 2){
                    //check message number
                    req.session.matchID = rows[0].match_id
                    res.status(200).send({
                        "message": "Game is ready"
                    });
                    return;
                }

                res.status(500).send({
                    "error": "Not supposed to happen rows.length=" + rows.length
                })
            }
        )
    }  
    check_if_ready()
})

// router.get('/welcome', ValidateLogin, (req, res) => {
//     res.send("welcome to the game")
// });

// function ValidateLogin(req, res, next){
//     if (!req.session.playerUsername){
//         res.send('you are not logged in');
//         //red.redirect("./login.html")
//         return
//     }
//     next()
// }


module.exports = router;