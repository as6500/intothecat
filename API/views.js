const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/Matches_Players_Pawns', (req, res) => {
    connection.execute('SELECT * FROM all_matches_players_pawn_locations',
        function (err, results, fields) {
            if (err){
                res.send(err);
                console.log(" Error trying to view all player and maches in db: " + err);
        return;
            }else{
                res.send(results)
            }
        });
});

router.get('/checkCurrentTurn', (req, res) => {

    var matchID = req.session.matchID
    
    //console.log("router: views/checkCurrentTurn")

   

    if (!matchID) {
        res.status(403).send({
            "error": "Invalid match id"
        })
        return
    }
    


        connection.execute('select * from matches_with_turn_name where match_id = ?',
        [matchID],

            function (err, results, fields) {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).send('Error executing query');
                    return;
                }

                if (results.length == 4) {
                    var currentTurn = results[0].turn
                    var player1Name = results[0].username
                    var player2Name = results[2].username
                    var data = {
                        "currentTurn": currentTurn,
                        "player1Name": player1Name,
                        "player2Name": player2Name,
                    };
                    //console.log(data);
                    res.status(200).json(data); 
                    return;     
                }

                else{
                    res.status(500).send('Rows different from 4. Got : ' + rows.length);
                    return
                }
            }
        )
})


module.exports = router;