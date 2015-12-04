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

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Project', function(err, projects, fields) {
    if (err) throw err;
    console.log(projects);
    res.render('projects', { projects: projects });
  });
});

router.get('/:id', function(req, res, next) {
  console.log(req);
  connection.query('SELECT * FROM Project WHERE idProject = ' + req.id, function(err, project, fields) {
    if (err) throw err;
    console.log();
    res.render('project', { project: project });
  });
});

module.exports = router;
