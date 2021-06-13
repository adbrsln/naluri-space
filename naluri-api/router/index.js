var mysql = require('mysql')
const express = require('express');
const router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "naluri"
})

router.get('/api/pi', (req, res) => {
    con.query("SELECT * FROM pi order by id DESC limit 1", function (err, result, fields) {
        if (err) throw err
        res.send({ current_value:result[0].value})
    })
})


module.exports = router