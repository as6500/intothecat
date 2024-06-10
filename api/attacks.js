const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post("/action", (req, res) => {

    var match_id = req.session.matchID
    var pawn_id = req.body.pawn_id;
    var player_id = req.session.playerID
    var direction = req.body.direction;
    var attack_name = req.body.attack_name;
    

    var nextTurn;
    var playerTurn;
    var initial_pawn_position_X;
    var initial_pawn_position_Y;
    var original_tbo_id;
    var turnid;
    var loc_pawn_has_attacked;
    var player1id, player2id;
    var player1health, player2health;
    var mind_move
    var machine_move
    var mind_attacked
    var machine_attacked
    var skipedturn
   
 
    var turn_number_name

    if (!direction || !["up", "down", "left", "right"].includes(direction)) {
        res.send("Data is missing, direction has to be: up, down, left, right");
        return;
    }
    
    if (!attack_name || !player_id || !pawn_id || !match_id) {
        res.send("Data is missing, make sure you have attack_name + player_id + pawn_id + match_id filled");
        return;
    }

    function get_attack(){

        console.log('function: get_attack')

        connection.execute("select * from pawns_attacks_and_damage where pawn_attack_name = ?",
        [attack_name],

            function (err, rows, fields) {
                if (err) {
                    return
                }
                if(rows.length == 0){
                    res.send("no attacked named like this. list of attacks consist of the following:\n"+
                    " Push-attack \n"+ 
                    " Taser-shot \n"+
                    " Corner-shot \n"+
                    " Bull-charge \n"+
                    " T-attack \n"+
                    " Artillery"
                    )
                    return
                }else if(rows.length == 1){
                    get_players()
                }
            }
        )
    }


    function get_players(){

        console.log('function: get_players')

        connection.execute("select * from matches_with_turn_name where match_id = ? order by player_id",
        [match_id], 

            function (err, rows, fields) {
                //with this query we pull 4 rows 2 from player 1 2 from player 2 and we give them these variables
                if (err){
                    res.send(err);
                    return;
                }
                if (rows.length == 0){
                    res.send("match does not exist");
                    return;
                }

                player1id = rows[0].player_id
                player2id = rows[2].player_id
                player1health = rows[0].health
                player2health = rows[2].health
                playerTurn = rows[0].turn
                turn_number_name = rows[0].turn_name
                nextTurn = playerTurn + 1

                if (player1health <= 0 || player2health <= 0 || rows[0].mat_end != null){
                    res.send("this game is over you cannot attack");
                    return;
                }else{  
                    check_attack();
                }
            }
        )
    }


    function check_attack(){

        console.log('function: check_attack')

        connection.execute("select * from pawns_attacks_and_damage where pawn_attack_name = ? and pawn_id = ?",
        [attack_name, pawn_id],

            function (err, rows, fields) {
                
                if (err) {
                    return
                }
                if(rows.length == 0){
                    res.send("this pawn cannot use this attack")
                    return

                }
                if(rows.length == 1){
                    check_other_things()
                }
            }
        )
    }

    function check_other_things(){

        console.log('function: check_other_things')

        //selecting from the view the which pawn will move from a player in a certain match
        connection.execute("select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?",
        [pawn_id, player_id, match_id],

            function (err, rows, fields) {
                // limits to how far you can move
                //the "row" 0 is the first result of the tile_z_coordinate (name of column in the view of the bd) and it turns it into a variable (initial_position_z)   
                if (err){
                    res.send(err);
                    return;
                }
                // if 0 results 
                if (rows.length == 0){
                    res.send("something is wrong");
                    return;
                }
                // if more than one
                if (rows.length > 1){
                    res.send("too wrong, something has too many pawns for one player in one match");
                    return;
                }
                initial_pawn_position_X = rows[0].tile_x_coordinate;
                initial_pawn_position_Y = rows[0].tile_y_coordinate;
                original_tbo_id = rows[0].tile_location_board_id;
                check_turn()
            }
        )
    }

    // check if its your turn with some deleatables 
    //| select * from matches_with_turn_name where player_id = ? and match_id = ? order by player_id
    function check_turn(){

        console.log('function: check_turn')


        connection.execute("select * from matches_with_turn_name where player_id = ? and match_id = ? order by player_id",
        [player_id, match_id],

            function (err, rows, fields) {
                if (err) {
                    res.send(err);
                    return;
                }
                //if the turn name matches with the correct player then we can play if not wrong turn
                if (turn_number_name == "1attack" && player1id == rows[0].player_id.toString().trim()) {
                    //if turn is equal to player_id then you can proceed and move. if not end.
                    check_if_youve_attacked()
                } else if (turn_number_name == "2attack" && player2id == rows[0].player_id.toString().trim()) {
                    check_if_youve_attacked()
                }else{
                    res.send("not your turn");
                    return;
                }
            }
        )
    }
    
    // check if loc_attacked if 1 or 0 
    //| select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?
    function check_if_youve_attacked(){   

        console.log('function: check_if_youve_attacked')
    
        connection.execute("select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?",
        [pawn_id, player_id, match_id],

            function (err, rows, fields) {
                var loc_attacked_yes_no = rows[0].loc_attacked;
                if (loc_attacked_yes_no == "1") {
                    //you cannot attack
                    res.send("You already attack with this pawn this turn")
                    return;
                }else{
                    pawn_can_attack()
                }
            }
        )
    }

    function pawn_can_attack(){
    
        console.log('function: pawn_can_attack')

        if(attack_name == "Push-attack"){
            Pushattack()
        }
        if(attack_name == "Taser-shot"){
            Tasershot(res, match_id, pawn_id, player_id, direction, initial_pawn_position_X, initial_pawn_position_Y, original_tbo_id, mind_move, machine_move, mind_attacked, machine_attacked, nextTurn, turnid, skipedturn, loc_pawn_has_attacked)
        }
        if(attack_name == "Corner-shot"){
            Cornershot()
        }
        if(attack_name == "Bull-charge"){
            Bullcharge()
        }
        if(attack_name == "T-attack"){
            Tattack(res, match_id, pawn_id, player_id, direction, initial_pawn_position_X, initial_pawn_position_Y, original_tbo_id, mind_move, machine_move, mind_attacked, machine_attacked, nextTurn, turnid, skipedturn, loc_pawn_has_attacked)
        }
        if(attack_name == "Artillery"){
            Artillery()
        }
    }    

    get_attack()
})







////////////////       //////
    /////            //
    ////    /////   ///
    ////             ///////
    ////                  //
    ////            //////

function Tasershot(res, match_id, pawn_id, player_id, direction, initial_pawn_position_X, initial_pawn_position_Y, original_tbo_id, mind_move, machine_move, mind_attacked, machine_attacked, nextTurn, turnid, skipedturn, loc_pawn_has_attacked) {
    
    console.log('function: Tasershot')

    let range = 3;
    let xStart, xEnd, yStart, yEnd;
    const minBoundary = 0;
    const maxBoundary = 15;

    var player1nickname
    var player2nickname
    var bothplayersdied = false
    var player1died = false
    var player2died = false

    // Determine the range based on the direction
    switch (direction) {
        case 'up':
            xStart = initial_pawn_position_X;
            xEnd = initial_pawn_position_X;
            yStart = Math.max(minBoundary, initial_pawn_position_Y - range);
            yEnd = Math.max(minBoundary, initial_pawn_position_Y - 1);
            break;
        case 'down':
            xStart = initial_pawn_position_X;
            xEnd = initial_pawn_position_X;
            yStart = Math.min(maxBoundary, initial_pawn_position_Y + 1);
            yEnd = Math.min(maxBoundary, initial_pawn_position_Y + range);
            break;
        case 'left':
            xStart = Math.max(minBoundary, initial_pawn_position_X - range);
            xEnd = Math.max(minBoundary, initial_pawn_position_X - 1);
            yStart = initial_pawn_position_Y;
            yEnd = initial_pawn_position_Y;
            break;
        case 'right':
            xStart = Math.min(maxBoundary, initial_pawn_position_X + 1);
            xEnd = Math.min(maxBoundary, initial_pawn_position_X + range);
            yStart = initial_pawn_position_Y;
            yEnd = initial_pawn_position_Y;
            break;
        default:
            res.send("Invalid direction");
            return;
    }

    connection.execute('select * from all_matches_players_pawn_locations where match_id = ? and ((tile_x_coordinate between ? and ?) and (tile_y_coordinate between ? and ?))',
    [match_id, xStart, xEnd, yStart, yEnd],

        function (err, rows, fields) {
            if (err) {
                res.send(err);
                return;
            }
            if (rows.length == 0) {
                console.log("No pawns to attack in range")
                TS_update_loc_attack()
                
                return;
            }

            var healths = {};

            TS_make_damage(0, rows, healths)
        }
    )

    function TS_make_damage(i, rows, healths){

        console.log('function: TS_make_damage')

        console.log("---------------------------- HIT (" + (i+1) + "/" + rows.length + ")");
        console.log("username: " + rows[i].username);
        console.log("pawn_name: " + rows[i].pawn_name);
        console.log("pawn_id: " + rows[i].pawn_id);

        var playerhit = rows[i].player_id
        var pawntypehit = rows[i].pawn_name
        var pawntypedamage
        if (pawntypehit == "Machine-cat"){
            pawntypedamage = 2
        }
        if(pawntypehit == "Mind-cat"){
            pawntypedamage = 1
        }

        var damage = (2/pawntypedamage);
        var oldHealth;

        if (healths.hasOwnProperty(rows[i].username))
        {
            oldHealth = healths[rows[i].username];
            healths[rows[i].username] -= damage;
        }        
        else {
            oldHealth = rows[i].health;
            healths[rows[i].username] = (rows[i].health - damage);
        }

        // console.log("Health " + oldHealth + " --> " + healths[rows[i].username] + " (" + damage + " damage)");
        console.log(`\x1b[34mHealth \x1b[32m${oldHealth} \x1b[36m--> \x1b[31m${healths[rows[i].username]} \x1b[36m(${damage} damage)\x1b[0m`);
        console.log(healths);     
        console.log(healths[rows[i].username])  
        connection.execute('update location inner join playermatch on loc_pm_id = pm_id inner join player on pm_pla_id = pla_id set pm_health = ? where pm_mat_id = ? and pla_id = ?',
            [healths[rows[i].username], match_id, playerhit],

            function (err) {
                if (err) {
                    res.send(err);
                    return;
                }

                i = i + 1;

                if (i >= rows.length)
                    TS_check_endgame();
                else
                    TS_make_damage(i, rows, healths)
            }
        )
    }

    function TS_check_endgame(){

        console.log('function: TS_check_endgame')

        connection.execute('select * from location inner join playermatch on loc_pm_id = pm_id inner join player on pm_pla_id = pla_id where pm_mat_id = ? order by pla_id',
        [match_id],

            function (err, rows) {
                player1nickname = rows[0].pla_nickname
                player2nickname = rows[2].pla_nickname
                
                if (err) {
                    res.send(err);
                    return;
                }
                if ( rows[0].pm_health <= 0 && rows[2].pm_health <= 0 ){
                    bothplayersdied = true;
                    TS_endgame()
                }
                if(rows[0].pm_health <= 0){
                    player1died = true;
                    TS_endgame()
                }
                if(rows[2].pm_health <= 0){
                    player2died = true;
                    TS_endgame()
                }
                else{
                    TS_update_loc_attack()
                }
            }
        )
    }

    function TS_endgame(){

        console.log('function: TS_endgame')
       
        connection.execute(`update location l
        inner join playermatch pm on l.loc_pm_id = pm.pm_id
        inner join matxh m on pm.pm_mat_id = m.mat_id
        set m.mat_end = now()
        where pm.pm_mat_id = ?`,
        [match_id],

            function (err) {
                if (err) {
                    res.send(err);
                    return;
                }

                if (bothplayersdied === true){
                    
                    res.send("both players died, game over!")
                    return
                }
                if(player1died === true){
                  
                    res.send(player2nickname + " won! game over!")
                    return
                }
                if(player2died === true){
                    
                    res.send(player1nickname + " won! game over!")
                    return
                }
            }
        )
    }

    function TS_update_loc_attack(){

        console.log('function: TS_update_loc_attack')

        loc_pawn_has_attacked = 1
        
        connection.execute("update location SET loc_attacked = ? WHERE loc_pawn_id = ? AND loc_tbo_id = ?",
        [loc_pawn_has_attacked, pawn_id, original_tbo_id],
        
            function (err) {
                if (err){
                    res.send(err);
                    return;
                }
                TS_potential_turn_skip()
            }
        )
    }
        
    function TS_potential_turn_skip(){
    
        console.log('function: TS_potential_turn_skip')
        
        connection.execute("select * from location inner join playermatch on loc_pm_id = pm_id where pm_pla_id = ? and pm_mat_id = ? order by loc_pawn_id ",
        [player_id, match_id],
            function (err, rows) {
            
                mind_move = rows[0].loc_moved;
                machine_move = rows[1].loc_moved;
                mind_attacked = rows[0].attacked;
                machine_attacked = rows[1].loc_attacked;
            
                if (err){
                    res.send(err);
                    return;
                }
            
                if (mind_move == "1" && machine_move == "1" && mind_attacked == "1" && machine_attacked == "1"){
                    // Proceed to the next turn automatically
                    TS_proceed_to_next_turn()
                }

                else{
                    res.send("attack successful!")
                }
            }
        )
    }
    
    function TS_proceed_to_next_turn() {
        
        console.log('function: TS_proceed_to_next_turn')

        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [nextTurn, match_id],

            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to proceed to the next turn.");
                    return;
                }
                TS_reset_locMovAtt()
            
            }
        );
    }
    
    // update the loc_move and loc_attacked from any 1's to 0
    //|update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id set l.loc_moved = 0 where pm.pm_mat_id = ?
    function TS_reset_locMovAtt() {
    
        console.log('function: TS_reset_locMovAtt')
        
        connection.execute("update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id set l.loc_moved = 0, l.loc_attacked = 0 where pm.pm_mat_id = ?",
        [match_id],

            function (err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.send("Failed to reset loc_move and loc_attacked from 1 to 0.");
                    return;
                }
                TS_potential_attack_skip()
            }
        )
    }
    
    // check if turn that was updaded is 3 or 6 (which is the attack turn) then proceed skip it for now (can end here :D)
    //| select * from playermatch where pm_mat_id = ?
    function TS_potential_attack_skip() {
        
        console.log('function: TS_potential_attack_skip')

        connection.execute("select * from playermatch where pm_mat_id = ?",
        [match_id],
            function (err, rows, fields) {
            
                turnid = rows[0].pm_turn_id
                if (turnid == 3 || turnid == 6) {
                    TS_skip_attack_turn();
                }
                
                else{
                    res.send("attack successful and skipped turn to: " + turnid)
                }
            }
        )
    }
    
    // if turnid 3 skip to 4 if 6 then to 1 update again (can end here)
    //| update playermatch set pm_turn_id = ? where pm_mat_id = ?
    function TS_skip_attack_turn() {
    
        console.log('function: TS_skip_attack_turn')

        skipedturn = (turnid == 3) ? 4 : (turnid == 6) ? 1 : turnid;
        
        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [skipedturn, match_id],
            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to skip to the next turn.");
                    return;
                }
                res.send("attack successful and skipped turn + attack turn to: " + turnid)
            }
        )
    }    
}



////////////////      ////
    /////            //  //
    ////    /////   ////////
    ////           //      //
    ////          //        //



function Tattack(res, match_id, pawn_id, player_id, direction, initial_pawn_position_X, initial_pawn_position_Y, original_tbo_id, mind_move, machine_move, mind_attacked, machine_attacked, nextTurn, turnid, skipedturn, loc_pawn_has_attacked) {
    
    console.log('function: Tattack')

    let range = 3;
    let xStart, xEnd, yStart, yEnd;
    const minBoundary = 0;
    const maxBoundary = 15;

    var player1nickname
    var player2nickname
    var bothplayersdied = false
    var player1died = false
    var player2died = false

    // Determine the range based on the direction
    switch (direction) {
        case 'up':
            xStart = initial_pawn_position_X;
            xEnd = initial_pawn_position_X;
            yStart = Math.max(minBoundary, initial_pawn_position_Y - range);
            yEnd = Math.max(minBoundary, initial_pawn_position_Y - 1);
            break;
        case 'down':
            xStart = initial_pawn_position_X;
            xEnd = initial_pawn_position_X;
            yStart = Math.min(maxBoundary, initial_pawn_position_Y + 1);
            yEnd = Math.min(maxBoundary, initial_pawn_position_Y + range);
            break;
        case 'left':
            xStart = Math.max(minBoundary, initial_pawn_position_X - range);
            xEnd = Math.max(minBoundary, initial_pawn_position_X - 1);
            yStart = initial_pawn_position_Y;
            yEnd = initial_pawn_position_Y;
            break;
        case 'right':
            xStart = Math.min(maxBoundary, initial_pawn_position_X + 1);
            xEnd = Math.min(maxBoundary, initial_pawn_position_X + range);
            yStart = initial_pawn_position_Y;
            yEnd = initial_pawn_position_Y;
            break;
        default:
            res.send("Invalid direction");
            return;
    }

    connection.execute('select * from all_matches_players_pawn_locations where match_id = ? and ((tile_x_coordinate between ? and ?) and (tile_y_coordinate between ? and ?))',
    [match_id, xStart, xEnd, yStart, yEnd],

        function (err, rows, fields) {
            if (err) {
                res.send(err);
                return;
            }
            if (rows.length == 0) {
                console.log("No pawns to attack in range")
                TA_update_loc_attack()
                
                return;
            }

            var healths = {};

            TA_make_damage(0, rows, healths)
        }
    )

    function TA_make_damage(i, rows, healths){

        console.log('function: TA_make_damage')

        console.log("---------------------------- HIT (" + (i+1) + "/" + rows.length + ")");
        console.log("username: " + rows[i].username);
        console.log("pawn_name: " + rows[i].pawn_name);
        console.log("pawn_id: " + rows[i].pawn_id);

        var playerhit = rows[i].player_id
        var pawntypehit = rows[i].pawn_name
        var pawntypedamage
        if (pawntypehit == "Machine-cat"){
            pawntypedamage = 2
        }
        if(pawntypehit == "Mind-cat"){
            pawntypedamage = 1
        }

        var damage = (2/pawntypedamage);
        var oldHealth;

        if (healths.hasOwnProperty(rows[i].username))
        {
            oldHealth = healths[rows[i].username];
            healths[rows[i].username] -= damage;
        }        
        else {
            oldHealth = rows[i].health;
            healths[rows[i].username] = (rows[i].health - damage);
        }

        // console.log("Health " + oldHealth + " --> " + healths[rows[i].username] + " (" + damage + " damage)");
        console.log(`\x1b[34mHealth \x1b[32m${oldHealth} \x1b[36m--> \x1b[31m${healths[rows[i].username]} \x1b[36m(${damage} damage)\x1b[0m`);
        console.log(healths);     
        console.log(healths[rows[i].username])  
        connection.execute('update location inner join playermatch on loc_pm_id = pm_id inner join player on pm_pla_id = pla_id set pm_health = ? where pm_mat_id = ? and pla_id = ?',
            [healths[rows[i].username], match_id, playerhit],

            function (err) {
                if (err) {
                    res.send(err);
                    return;
                }

                i = i + 1;

                if (i >= rows.length)
                    TA_check_endgame();
                else
                    TA_make_damage(i, rows, healths)
            }
        )
    }

    function TA_check_endgame(){

        console.log('function: TA_check_endgame')

        connection.execute('select * from location inner join playermatch on loc_pm_id = pm_id inner join player on pm_pla_id = pla_id where pm_mat_id = ? order by pla_id',
        [match_id],

            function (err, rows) {
                player1nickname = rows[0].pla_nickname
                player2nickname = rows[2].pla_nickname
                
                if (err) {
                    res.send(err);
                    return;
                }
                if ( rows[0].pm_health <= 0 && rows[2].pm_health <= 0 ){
                    bothplayersdied = true;
                    TA_endgame()
                }
                if(rows[0].pm_health <= 0){
                    player1died = true;
                    TA_endgame()
                }
                if(rows[2].pm_health <= 0){
                    player2died = true;
                    TA_endgame()
                }
                else{
                    TA_update_loc_attack()
                }
            }
        )
    }

    function TA_endgame(){

        console.log('function: TS_endgame')
       
        connection.execute(`update location l
        inner join playermatch pm on l.loc_pm_id = pm.pm_id
        inner join matxh m on pm.pm_mat_id = m.mat_id
        set m.mat_end = now()
        where pm.pm_mat_id = ?`,
        [match_id],

            function (err) {
                if (err) {
                    res.send(err);
                    return;
                }

                if (bothplayersdied === true){
                    
                    res.send("both players died, game over!")
                    return
                }
                if(player1died === true){
                  
                    res.send(player2nickname + " won! game over!")
                    return
                }
                if(player2died === true){
                    
                    res.send(player1nickname + " won! game over!")
                    return
                }
            }
        )
    }

    function TA_update_loc_attack(){

        console.log('function: TA_update_loc_attack')

        loc_pawn_has_attacked = 1
        
        connection.execute("update location SET loc_attacked = ? WHERE loc_pawn_id = ? AND loc_tbo_id = ?",
        [loc_pawn_has_attacked, pawn_id, original_tbo_id],
        
            function (err) {
                if (err){
                    res.send(err);
                    return;
                }
                TA_potential_turn_skip()
            }
        )
    }
        
    function TA_potential_turn_skip(){
    
        console.log('function: TA_potential_turn_skip')
        
        connection.execute("select * from location inner join playermatch on loc_pm_id = pm_id where pm_pla_id = ? and pm_mat_id = ? order by loc_pawn_id ",
        [player_id, match_id],
            function (err, rows) {
            
                mind_move = rows[0].loc_moved;
                machine_move = rows[1].loc_moved;
                mind_attacked = rows[0].attacked;
                machine_attacked = rows[1].loc_attacked;
            
                if (err){
                    res.send(err);
                    return;
                }
            
                if (mind_move == "1" && machine_move == "1" && mind_attacked == "1" && machine_attacked == "1"){
                    // Proceed to the next turn automatically
                    TA_proceed_to_next_turn()
                }

                else{
                    res.send("attack successful!")
                }
            }
        )
    }
    
    function TA_proceed_to_next_turn() {
        
        console.log('function: TA_proceed_to_next_turn')

        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [nextTurn, match_id],

            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to proceed to the next turn.");
                    return;
                }
                TA_reset_locMovAtt()
            
            }
        );
    }
    
    // update the loc_move and loc_attacked from any 1's to 0
    //|update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id set l.loc_moved = 0 where pm.pm_mat_id = ?
    function TA_reset_locMovAtt() {
    
        console.log('function: TA_reset_locMovAtt')
        
        connection.execute("update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id set l.loc_moved = 0, l.loc_attacked = 0 where pm.pm_mat_id = ?",
        [match_id],

            function (err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.send("Failed to reset loc_move and loc_attacked from 1 to 0.");
                    return;
                }
                TA_potential_attack_skip()
            }
        )
    }
    
    // check if turn that was updaded is 3 or 6 (which is the attack turn) then proceed skip it for now (can end here :D)
    //| select * from playermatch where pm_mat_id = ?
    function TA_potential_attack_skip() {
        
        console.log('function: TA_potential_attack_skip')

        connection.execute("select * from playermatch where pm_mat_id = ?",
        [match_id],
            function (err, rows, fields) {
            
                turnid = rows[0].pm_turn_id
                if (turnid == 3 || turnid == 6) {
                    TA_skip_attack_turn();
                }
                
                else{
                    res.send("attack successful and skipped turn to: " + turnid)
                }
            }
        )
    }
    
    // if turnid 3 skip to 4 if 6 then to 1 update again (can end here)
    //| update playermatch set pm_turn_id = ? where pm_mat_id = ?
    function TA_skip_attack_turn() {
    
        console.log('function: TA_skip_attack_turn')

        skipedturn = (turnid == 3) ? 4 : (turnid == 6) ? 1 : turnid;
        
        connection.execute("update playermatch set pm_turn_id = ? where pm_mat_id = ?",
        [skipedturn, match_id],
            function (err, rows, fields) {
            
                if (err) {
                    console.error(err);
                    res.send("Failed to skip to the next turn.");
                    return;
                }
                res.send("attack successful and skipped turn + attack turn to: " + turnid)
            }
        )
    }    
}




   




//go to postman and use this

// attack_name --> Taser-shot
// match_id --> 2
// pawn_id --> 1
// player_id --> 4
// direction --> up


module.exports = router;