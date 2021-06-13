/**
 * Naluri Space Project
 * 
 * Title :  Calculating Pi using Nilankantha Series
 * Description :  The script will run and calculate the Pi using nilankantha series which then will insert the records into mysql database
 * Author : Muhammad Adib Ahmad Roslan
 */

var mysql = require('mysql');
let pi = 3
let add = true
let start = 2
let iteration = 1

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

console.log("Connected!");
con.query(" DROP DATABASE IF EXISTS naluri", function (err, result) {
    if (err) throw err;
    console.log("Drop database");
});
con.query("CREATE DATABASE IF NOT EXISTS naluri", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});

con.query("USE naluri", function (err, result) {
    if (err) throw err;
});

var sql = "CREATE TABLE `pi` ( `id` int(11) NOT NULL AUTO_INCREMENT,`value` double DEFAULT NULL,PRIMARY KEY (`id`))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});


do {
    iteration++
    start--
    denoValue = 1;
    for (let n = 0; n < 3; n++) {
        start++
        denoValue *= start
    }
    val = 4 / denoValue
    if (add) {
        pi += val;
    } else {
        pi -= val;
    }
    add = !add
    var sql = `INSERT INTO pi (value) VALUES (${Math.abs(pi)})`;
    con.query(sql, function (err, result) {
        if (err) throw err;
    });


    // console.log("iteration " + iteration + " pi : " +  Math.abs(pi))
} while (Math.abs(pi) != Math.PI.toPrecision(50))



