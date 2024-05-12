const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/:id', (req, res) => {
    var mapID = req.params.id;

    connection.execute("select * from view_any_map where map_id = ?",
    [mapID],
    function (err, rows, fields) {
        if (err){
            res.send(err);
            return;
        }
        if (rows.length == 0){
            res.send("map doesnt exist (only from 1-3 exist)")
        }else{
            res.send(rows);
        }
    });
});


router.get('/match/:matchID/', (req, res) => {
    var matchID = req.params.matchID;
    
    // Execute query to retrieve all rows for the specified match, ordered by player_id
    connection.execute("SELECT * FROM all_matches_players_pawn_locations WHERE match_id = ? ORDER BY player_id",
        [matchID],
        function (err, rows, fields) {
            if (err) {
                console.error('Error executing query:', err);
                res.send('Error executing query');
                return;
            }
            // Check if we have enough rows to assign
            if (rows.length >= 5) {
                res.send('too many rows for the match');
                return
            }
            if (rows.length <= 3) {
                res.send('too little rows for the match');
                return
            }
            if (rows.length == 4) {
                var player1Rows = [rows[0], rows[1]]; // Rows 1 and 2
                var player2Rows = [rows[2], rows[3]]; // Rows 3 and 4
                res.json({
                    "player1Rows": player1Rows,
                    "player2Rows": player2Rows, 
                })             
            }
        }
    );
});

module.exports = router;