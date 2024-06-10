const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post("/LocMove", (req, res) => {
    var match_id = req.body.match_id;

    connection.execute("update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id SET l.loc_moved = 0 where pm.pm_mat_id = ?",
        [match_id],
        function (err, result) {
            if (err) {
                res.send(err);
                return;
            }
            if (result.affectedRows === 0) {
                res.send("match does not exist");
                return;
            }
            res.send("reset the bd!");
        }
    );
});

router.post("/LocAttack", (req, res) => {
    var match_id = req.body.match_id;

    connection.execute("update location l inner join playermatch pm on l.loc_pm_id = pm.pm_id SET l.loc_attacked = 0 where pm.pm_mat_id = ?",
        [match_id],
        function (err, result) {
            if (err) {
                res.send(err);
                return;
            }
            if (result.affectedRows === 0) {
                res.send("match does not exist");
                return;
            }
            res.send("reset the attack bd!");
        }
    );
});


router.post("/turns1", (req, res) => {
 
    var match_id = req.body.match_id

    connection.execute("update playermatch set pm_turn_id = 5 where pm_mat_id = ?",
    [match_id],
    function (err, result) {
        if (err) {
            console.error(err);
            res.send("Failed to skip to the next turn.");
            return;
        }
        if (result.affectedRows === 0) {
            res.send("match does not exist");
            return;
        }
        res.send("reseted the turns to player 1's turn in this match")
    });
});


router.post("/turns2", (req, res) => {
 
    var match_id = req.body.match_id

    connection.execute("update playermatch set pm_turn_id = 2 where pm_mat_id = ?",
    [match_id],
    function (err, result) {
        if (err) {
            console.error(err);
            res.send("Failed to skip to the next turn.");
            return;
        }
        if (result.affectedRows === 0) {
            res.send("match does not exist");
            return;
        }
        res.send("reseted the turns to player 2's turn in this match")
    });
});




module.exports = router;