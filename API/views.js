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

module.exports = router;