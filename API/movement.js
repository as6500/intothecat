const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post("/Pawn", (req, res) => {
    var match_id = req.body.match_id;
    var pawn_id = req.body.pawn_id;
    var positions = Array.from(req.body.positions);
    var player_id = req.body.player_id;
    var map_id = req.body.map_id;

    // Make the query to check all positions
    var queryarray = 'SELECT * FROM tileboard WHERE tbo_tty_id != 3 and tbo_map_id = ' + map_id + ' and ('
    for (var i = 0; i < positions.length; i++){   
        var tile_y = positions[i][1]
        var tile_x = positions[i][0]
        var valid_final_y_position = positions[positions.length - 1][1]
        var valid_final_x_position = positions[positions.length - 1][0]
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
            MakeNextRequest();
        }

    function MakeNextRequest() {
                    //selecting from the view the which pawn will move from a player in a certain match
                    connection.execute("SELECT * from all_matches_players_pawn_locations where pawn_id = ? and player_id = ? and match_id = ?",
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
                        var initial_pawn_position_X = rows[0].tile_x_coordinate;
                        var initial_pawn_position_Y = rows[0].tile_y_coordinate;
                        var original_tbo_id = rows[0].tile_location_board_id;
                        //if first result from array is different from the initial pawn position
                        if (positions[0][0] !== initial_pawn_position_X && positions[0][1] !== initial_pawn_position_Y) {
                            res.send("First position of array does not match initial position of player's.");
                            return;
                        }
                        for (var i = 1; i < positions.length; i++) {
                            var prevXarray = positions[i - 1][0];
                            var prevYarray = positions[i - 1][1];
                            var currentXarray = positions[i][0];
                            var currentYarray = positions[i][1];
                            // Check if the current position is adjacent to the previous one
                            if (Math.abs(currentXarray - prevXarray) > 1 || Math.abs(currentYarray - prevYarray) > 1) {
                                res.send("Positions must change one value at a time.");
                                return;
                            }
                        }
                        //same but with pawn_name column
                        var pawn_type = rows[0].pawn_name;
                        // variable that limits the movement for a piece.
                        var mind_cat_budget = 5;
                        var machine_cat_budget = 7;
                        // z that wants to move - starting z = the difference
                        var difference_position_x = Math.abs(valid_final_x_position - initial_pawn_position_X);
                        var difference_position_y = Math.abs(valid_final_y_position - initial_pawn_position_Y);
                        var total_absolute_difference = difference_position_x + difference_position_y;
                        // Movement limit (distance)
                    
                    if (pawn_type == "Mind-cat"){
                        if (total_absolute_difference >= mind_cat_budget) {
                            //you cannot move
                            res.send("NO you moved too much with mind-cat")
                            return;
                        }else{
                            movePawnToPosition(req, res, pawn_id, player_id, match_id, valid_final_x_position, valid_final_y_position, original_tbo_id)
                        }
                    }else if (pawn_type == "Machine-cat"){
                        if (total_absolute_difference >= machine_cat_budget) {
                            //you cannot move
                            res.send("NO you moved too much with machine_cat")
                            return;
                        }else{
                            movePawnToPosition(req, res, pawn_id, player_id, match_id, valid_final_x_position, valid_final_y_position, original_tbo_id)
                        }
                    }
            });
        }
    });
});

function movePawnToPosition(req, res, pawn_id, player_id, match_id, valid_final_x_position, valid_final_y_position, original_tbo_id){   
    // This is the new tbo_id that we want to move to(x,y) 
    var newTboID;
    connection.execute("select tbo_id from tileboard WHERE tbo_x = ? and tbo_y = ?",
    [valid_final_x_position, valid_final_y_position],
    function (err, rows, fields) {
       newTboID = rows[0].tbo_id;
       updatePawnPosition()
    });

    function updatePawnPosition(){
        connection.execute("update location SET loc_tbo_id = ? WHERE loc_pawn_id = ? AND loc_tbo_id = ?",
        [newTboID, pawn_id, original_tbo_id],
        function (err, rows, fields) {
            if (err){
            res.send(err);
            return;
            }
        res.send("updated")
        })
    }
}

//go to postman and use this
// {
//     "positions":[[1,2],[1,3],[2,3],[2,4]],
//     "map_id": 1,
//     "pawn_id": 2,
//     "player_id": 2,
//     "match_id": 1
// }


module.exports = router;