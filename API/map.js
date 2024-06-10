const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/details/:id', (req, res) => {
    var mapID = req.params.id;

    connection.execute("select * from view_any_map where map_id = ?",
    [mapID],
    function (err, rows, fields) {
        if (err){
            res.send(err);
            return;
        }
        if (rows.length == 0){
            res.status(403).send({
                "message": "map doesnt exist"
            })
        }else{
            res.send(rows);
        }
    });
});


router.get('/match', (req, res) => {

    var matchID = req.session.matchID
    var playerUsername = req.session.playerUsername
  
    console.log("router: map/match")

    if (!matchID) {
        res.status(403).send({
            "error": "Invalid match id"
        })
        return
    }
    
    // Execute query to retrieve all rows for the specified match, ordered by player_id
    connection.execute("select * from all_matches_players_pawn_locations where match_id = ? order by player_id",
    [matchID],

        function (err, rows, fields) {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
                return;
            }

            if (rows.length == 4) {
                var player1Rows = [rows[0], rows[1]]; // Rows 1 and 2
                var player2Rows = [rows[2], rows[3]]; // Rows 3 and 4
                var player1isLocal = (rows[0].username == playerUsername);
                
                console.log("1" + player1Rows)
                console.log("2" +player2Rows)
                console.log("3" +player1isLocal)
                    
                res.status(200).send({
                    "player1Rows": player1Rows,
                    "player1IsLocal": player1isLocal,
                    "player2Rows": player2Rows,
                    "player2IsLocal": !player1isLocal
                })
                //json(data); 
                return;     
            }
            
            else{
                res.status(500).send('Rows different from 4. Got : ' + rows.length);
                return
            }

        }
    );
});

module.exports = router;