const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/turnskip', (req, res) => {

    var player_id = req.session.playerID
    var match_id = req.session.matchID
    var player1id
    var player2id
    var player1health
    var player2health
    var playerTurn

    var nextTurn
    var turn_number_name
    
    var turnid

    var skipedturn
    
    if (!match_id || !player_id){
        res.send("Data is missing, I need to know which game and who wants to skip turn, fill match_id and player_id");
        return;
    }

    function get_match(){

        console.log('function: getmatch')

        connection.execute("select * from matches_with_turn_name where match_id = ? order by player_id",
        [match_id], 

            function (err, rows, fields) {
                //with this query we pull 4 rows 2 from player 1 2 from player 2 and we give them these variables
                player1id = rows[0].player_id
                player2id = rows[2].player_id
                player1health = rows[0].health
                player2health = rows[2].health
                playerTurn = rows[0].turn
                turn_number_name = rows[0].turn_name
                nextTurn = playerTurn + 1

                if (err){
                    res.send(err);
                    return;
                }
                if (rows.length == 0){
                    res.send("match does not exist");
                    return;
                }
                if (player1health <= 0 || player2health <= 0 || rows[0].mat_end != null){
                    res.send("this game is over you cannot skip turn");
                    return;
                }else{  
                    check_player()
                }
            }
        )
    }

    function check_player(){

        console.log('function: check_player')
       
        connection.execute(`select * from matches_with_turn_name where match_id = ? and player_id = ?`,
        [match_id, player_id],

            function (err, rows) {
                if (err) {
                    res.send(err);
                    return
                }
                if(rows.length == 0) {
                   res.send("this player isnt in this game")
                   return
                }

                check_turn()
            }
        )
    }
    function check_turn(){


        console.log('function: check_turn')

        

        connection.execute("select * from matches_with_turn_name where player_id = ? and match_id = ? order by player_id",
        [player_id, match_id],

            function (err, rows, fields) {
                if (err) {
                    res.send(err);
                    return
                }
                //if the turn name matches with the correct player then we can play if not wrong turn
                if (turn_number_name == "1attack" && player1id == rows[0].player_id.toString().trim()) {
                    //if turn is equal to player_id then you can proceed and move. if not end.
                    proceed_to_next_turn()
                } else if (turn_number_name == "2attack" && player2id == rows[0].player_id.toString().trim()) {
                    proceed_to_next_turn()
                }else{
                    res.send("not your turn");
                    return;
                }
            }
        )
    }

    function proceed_to_next_turn(){
        
        console.log('function: proceed_to_next_turn')

        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [nextTurn, match_id],

            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to proceed to the next turn.");
                    return;
                }
                reset_locMovAtt()
            
            }
        )
    }

    function reset_locMovAtt() {
    
        console.log('function: reset_locMovAtt')
        
        connection.execute("update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id set l.loc_moved = 0, l.loc_attacked = 0 where pm.pm_mat_id = ?",
        [match_id],

            function (err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.send("Failed to reset loc_move and loc_attacked from 1 to 0.");
                    return;
                }
                potential_attack_skip()
            }
        )
    }
    
    // check if turn that was updaded is 3 or 6 (which is the attack turn) then proceed skip it for now (can end here :D)
    //| select * from playermatch where pm_mat_id = ?
    function potential_attack_skip() {
        
        console.log('function: potential_attack_skip')

        connection.execute("select * from playermatch where pm_mat_id = ?",
        [match_id],
            function (err, rows, fields) {
            
                turnid = rows[0].pm_turn_id
                if (turnid == 3 || turnid == 6) {
                    skip_attack_turn();
                }
                
                else{
                    res.send("skipped turn to: " + turnid)
                    return
                }
            }
        )
    }
    
    // if turnid 3 skip to 4 if 6 then to 1 update again (can end here)
    //| update playermatch set pm_turn_id = ? where pm_mat_id = ?
    function skip_attack_turn() {
    
        console.log('function: skip_attack_turn')

        skipedturn = (turnid == 3) ? 4 : (turnid == 6) ? 1 : turnid;
        
        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [skipedturn, match_id],
            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to skip to the next turn.");
                    return;
                }
                
                else{
                res.send("skipped two turns (because of attack resolution) to turn number: " + skipedturn)
                return
                }
            }
        )
    }    
    get_match()

    //go to postman and use this

    // match_id --> 2
    // player_id --> 4
})




router.post('/giveup', (req, res) => {

    var match_id = req.body.match_id
    var player_id = req.body.player_id
    var player1health
    var player2health

    var playernickname

    if (!match_id || !player_id){
        res.send("Data is missing, I need to know which game and who wants to give up, fill match_id and player_id");
        return;
    }

    function start(){

        console.log('function: start')

        connection.execute("select * from matches_with_turn_name where match_id = ? order by player_id",
        [match_id], 

            function (err, rows, fields) {

                if (err){
                    res.send(err);
                    return;
                }
                if (rows.length == 0){
                    res.send("match does not exist");
                    return;
                }

                player1health = rows[0].health
                player2health = rows[2].health
                
                if (player1health <= 0 || player2health <= 0 || rows[0].mat_end != null){
                    res.send("this game is over you cannot give up");
                    return;
                }else{  
                    check_who_gave_up()
                }
            }
        )
    }

    function check_who_gave_up(){

        console.log('function: check_who_gave_up')
       
        connection.execute(`select * from matches_with_turn_name where match_id = ? and player_id = ?`,
        [match_id, player_id],

            function (err, rows) {
                if (err) {
                    res.send(err);
                    return
                    ;
                }
                if(rows.length == 0) {
                   res.send("this player isnt in this game")
                }

                get_nickname()
            }
        )
    }
   
    function get_nickname(){

        console.log('function: get_nickname')
       
        connection.execute(`select pla_nickname as nickname from location l
        inner join playermatch pm on l.loc_pm_id = pm.pm_id
        inner join player p on pm.pm_pla_id = p.pla_id
        where pm.pm_mat_id = ? and p.pla_id = ?`,
        [match_id, player_id],

            function (err, rows) {
                playernickname = rows[0].nickname

                if (err) {
                    res.send(err);
                    return
                }

                endgame()
            }
        )
    }

   
    function endgame(){

        console.log('function: endgame')
       
        connection.execute(`update location l
        inner join playermatch pm on l.loc_pm_id = pm.pm_id
        inner join matxh m on pm.pm_mat_id = m.mat_id
        set m.mat_end = now()
        where pm.pm_mat_id = ?`,
        [match_id],

            function (err, rows) {
                if (err) {
                    res.send(err);
                    return;
                }else{
                    res.send(playernickname + " gave up, game over!")
                    return
                }
            }
        )
    }
    start()

    //go to postman and use this

    // match_id --> 2
    // player_id --> 4
})
module.exports = router;