const express = require('express');
const app = express();
const mysql = require('mysql');
var sqlUtils = require("./sql/functions/sql-utils.js");

const PORT = 3000;
const HOST = "localhost";

var connection = mysql.createConnection({
    host: HOST,
    user: 'root',
    password: 'admin',
    database: 'hackernews'
});

app.get('/post', function (req, res) {
    sqlUtils.posts(connection, function (rows, fields) {
        console.log("test", rows)
        res.send(rows)
    });
})

app.get('/latest', function (req, res) {
    sqlUtils.posts(connection, function (rows, fields) {
        console.log("test", rows)
        res.send(rows)
    });
})

app.put('/post', function (req, res) {
    sqlUtils.posts(connection, function (rows, fields) {
        console.log("test", rows)
        res.send(rows)
    });
})


app.get('/status', function (req, res) {
    // HANDLE STATUS
})

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!')
})