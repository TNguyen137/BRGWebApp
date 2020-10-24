'use strict';
var express = require('express');
var path = require('path');
require('dotenv').config();

//var http = require('http');
//var port = process.env.PORT || 1337;

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
var sql = require("mssql");

app.get('/test', function (req, res) {
    //res.send(JSON.stringify(process.env.SQL_SERVER));
    console.log(process.env.SQL_SERVER);
    var sql = require("mssql");

    // config for your database
    var config = {
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DATABASE
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from TEST', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            console.log(recordset.recordset);
            res.send(recordset.recordset);
            //res.render('/', { title: 'hi', data: recordset });
        });
    });
});

//Allow port setting
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening TK');

    var sql = require("mssql");

    // config for your database
    var config = {
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DATABASE
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from TEST', function (err, recordset) {

            if (err) console.log(err)
            var tester = JSON.stringify(recordset.recordset);
            // send records as a response
            console.log(recordset);
            console.log(tester);
            console.log(JSON.parse(tester));

            //res.send(recordset);
            //res.render('user', { title: 'hi', data: recordset });
        });
    });
});

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
