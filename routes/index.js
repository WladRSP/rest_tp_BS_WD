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

connection.query('SELECT * FROM Projet', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows.length);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
