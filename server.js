const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const post = require('./routes/post');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/post', post);
app.use('/user', user);

app.listen(3000, function () {
})

module.exports = app;