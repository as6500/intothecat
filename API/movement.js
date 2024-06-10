const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post("/pawn", (req, res) => {

    var match_id = req.session.matchID;
    var pawn_id = req.body.pawn_id;
    var positions = Array.from(req.body.positions);
    var player_id = req.session.playerID
    var map_id = 1 

    var initial_pawn_position_X;
    var initial_pawn_position_Y;
    var valid_final_x_position;
    var valid_final_y_position;
    var original_tbo_id;
    var newTboID;
    var loc_pawn_has_moved;
    var player1name, player2name;


    var pawn_type
    var mind_cat_budget
    var machine_cat_budget
    var difference_position_x 
    var difference_position_y
    var total_absolute_difference 
    var turn_number_name

    if (!match_id || !pawn_id || !player_id || !map_id || !positions || positions.length == 0){
        console.log("match_id:" + match_id);
        console.log("pawn_id:" + pawn_id);
        console.log("player_id:" + player_id);
        console.log("map_id:" + map_id);
        console.log("positions:" + positions);

        res.send("opsi dopsi");
        return;
    }

    // give each player variables and some checks 
    //| select * from matches_with_turn_name where match_id = ? order by player_id
    function GetPlayers(){

        connection.execute("select * from matches_with_turn_name where match_id = ? order by player_id",
        [match_id], 

            function (err, rows, fields) {
                //with this query we pull 4 rows 2 from player 1 2 from player 2 and we give them these variables
                player1name = rows[0].player_id
                player2name = rows[2].player_id
                player1health = rows[0].health
                player2health = rows[2].health
                if (err){
                    res.send(err);
                    return;
                }
                if (rows.length == 0){
                    res.send("match does not exist");
                    return;
                }
                if (player1health <= 0 || player2health <= 0 || rows[0].mat_end != null){
                    res.send("this game is over you cannot attack");
                    return;
                }else{
                    checkpath();
                }
            }
        )
    }

    // Make the query to check all positions 
    //| select * from tileboard where tbo_tty_id != 3 and tbo_map_id = ' + map_id + ' and ((tbo_x = " + tile_x + " and tbo_y= " + tile_y + ")or)
    function checkpath(){

        var queryarray = 'select * from tileboard where tbo_tty_id != 3 and tbo_map_id = ' + map_id + ' and ('
        for (var i = 0; i < positions.length; i++){   
            var tile_y = positions[i][1]
            var tile_x = positions[i][0]
            valid_final_y_position = positions[positions.length - 1][1]
            valid_final_x_position = positions[positions.length - 1][0]
            if (i >0 )
            queryarray += ' or'
            queryarray += " (tbo_x = " + tile_x + " and tbo_y= " + tile_y + ")"
        
            if (tile_x <= 0 || tile_y <= 0 || tile_x >= 16 || tile_y >= 16){
                res.send("Position not valid.");
                return;
            }
        
            if(map_id >= 4){
                res.send("map does not exist");
                return;
            }

        }
        queryarray += ')'
        
        connection.execute(queryarray, 
            function (err, rows, fields) {
                // if the rows not equal to the positions given it means some position is invalid
                if (rows.length != positions.length){
                    res.send("invalid path");
                    return;
                }else{

                    checkmovement();
                }

            }
        )
    }

    // check inital and final positions with limit checks
    //| select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?
    function checkmovement(){

       //selecting from the view the which pawn will move from a player in a certain match
       connection.execute("select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?",
       [pawn_id, player_id, match_id],

            function (err, rows, fields) {
                if (err){
                    res.send(err);
                    return;
                }
                // if 0 results 
                if (rows.length == 0){
                    res.send("pawn_id not defined");
                    return;
                }
                // if more than one
                if (rows.length > 1){
                    res.send("pawn_id has too many pawns for one player in one match");
                    return;
                }
                
                // limits to how far you can move
                //the "row" 0 is the first result of the tile_z_coordinate (name of column in the view of the bd) and it turns it into a variable (initial_position_z)   
                initial_pawn_position_X = rows[0].tile_x_coordinate;
                initial_pawn_position_Y = rows[0].tile_y_coordinate;
                    original_tbo_id = rows[0].tile_location_board_id;
                //if first result from array is different from the initial pawn position
                if (positions[0][0] !== initial_pawn_position_X || positions[0][1] !== initial_pawn_position_Y) {
                    res.send("First position of array does not match initial position of player's.");
                    return;
                }
                for (var i = 1; i < positions.length; i++) {
                    var prevXarray = positions[i - 1][0];
                    var prevYarray = positions[i - 1][1];
                    var currentXarray = positions[i][0];
                    var currentYarray = positions[i][1];
                    // Check if the current position is adjacent to the previous one
                    if (!(Math.abs(currentXarray - prevXarray) === 1 && currentYarray === prevYarray) && !(Math.abs(currentYarray - prevYarray) === 1 && currentXarray === prevXarray)) {
                        res.send("Positions must change one value at a time.");
                        return;
                    }
                }
                //same but with pawn_name column
                pawn_type = rows[0].pawn_name;
                // variable that limits the movement for a piece.
                mind_cat_budget = 5;
                machine_cat_budget = 7;
                // z that wants to move - starting z = the difference
                difference_position_x = Math.abs(valid_final_x_position - initial_pawn_position_X);
                difference_position_y = Math.abs(valid_final_y_position - initial_pawn_position_Y);
                total_absolute_difference = difference_position_x + difference_position_y;     
                //  something_moved variable if true then you already have moved this turn
                // Movement limit (distance)
                if (pawn_type == "Mind-cat"){
                    if (total_absolute_difference >= mind_cat_budget) {
                        //you cannot move
                        res.send("NO you moved too much with mind-cat")
                        return;
                    }
                    else{
                        checkturn()
                    }
                }
                else if (pawn_type == "Machine-cat"){
                    if (total_absolute_difference >= machine_cat_budget) {
                        //you cannot move
                        res.send("NO you moved too much with machine_cat")
                        return;
                    }
                    else{
                        checkturn()
                    }
                }
            }
        )
    }

    // check if its your turn with some deleatables 
    //| select * from matches_with_turn_name where player_id = ? and match_id = ? order by player_id
    function checkturn(){

        connection.execute("select * from matches_with_turn_name where player_id = ? and match_id = ? order by player_id",
        [player_id, match_id],

            function (err, rows, fields) {
                if (err) {
                    res.send(err);
                    return;
                }
                if (rows.length == 0){
                    res.send("player_id does not exist");
                    return;
                }
                //if the turn name matches with the correct player then we can play if not wrong turn
                turn_number_name = rows[0].turn_name
                if (turn_number_name == "1attack" && player1name == rows[0].player_id.toString().trim()) {
                    //if turn is equal to player_id then you can proceed and move. if not end.
                    movePawnToPosition()
                } else if (turn_number_name == "2attack" && player2name == rows[0].player_id.toString().trim()) {
                    movePawnToPosition()
                }else{
                    res.send("not your turn");
                    return;
                }
            }
        )
    }
    
    // check if loc_move if 1 or 0 
    //| select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?
    function movePawnToPosition(){   

        console.log('movePawnToPosition')
    
        connection.execute("select * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?",
        [pawn_id, player_id, match_id],

            function (err, rows, fields) {
                var loc_move_yes_no = rows[0].loc_moved;
                if (loc_move_yes_no == "1") {
                    //you cannot move
                    res.send("You already moved with this pawn this turn")
                    return;
                }else{
                    pawncanmove()
                }
            }
        )
    }

    //  using final array values to select x and y then isolate it with newTboID variable to update 
    //| select tbo_id from tileboard WHERE tbo_x = ? and tbo_y = ?
    function pawncanmove(){
    
        console.log('pawnCanMove')

        connection.execute("select tbo_id from tileboard WHERE tbo_x = ? and tbo_y = ?",
        [valid_final_x_position, valid_final_y_position],

            function (err, rows, fields) {
                newTboID = rows[0].tbo_id;
                updatePawnPosition()
            }
        )
    }

    // update pawn using newTboID and declare loc_moved to 1 
    //| update location SET loc_tbo_id = ?, loc_moved = ? WHERE loc_pawn_id = ? AND loc_tbo_id = ?
    function updatePawnPosition(){
    
        console.log('updatePawnPosition')
        loc_pawn_has_moved = 1

        connection.execute("update location SET loc_tbo_id = ?, loc_moved = ? WHERE loc_pawn_id = ? AND loc_tbo_id = ?",
        [newTboID, loc_pawn_has_moved, pawn_id, original_tbo_id],

            function (err, rows, fields) {
                if (err){

                    res.send(err);
                    return;
                }
                res.send("you moved")
                return
                
            }
        )
    }    
    GetPlayers()
})

//go to postman and use this
// {
//     "positions":[[1,2],[1,3],[2,3],[2,4]],
//     "map_id": 1,
//     "pawn_id": 2,
//     "player_id": 2,
//     "match_id": 1
// }


module.exports = router