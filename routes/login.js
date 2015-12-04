/**
 * Created by walrand on 04/12/15.
 */
var express = require('express');
var router  = express.Router();
var mysql   = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'REST_DB'
});

connection.connect();


router.post('/',function (req, res) {
    var pass = req.body.password;
    var log  = req.body.username;

    connection.query('SELECT * from Users WHERE password == ' + pass +' && username =='+ log +';')
            , function(err, login, fields){
        if (err) throw err;
        //console.log(login);
        if(login){
            res.redirect("/projects");
        }
    }

});

module.exports = router;
