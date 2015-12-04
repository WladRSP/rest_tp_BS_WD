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
  connection.query('SELECT * FROM Projet', function(err, projects, fields) {
    if (err) throw err;
    console.log(projects);
    res.render('projects', { projects: projects });
  });
});

router.get('/:id', function(req, res, next) {

  connection.query('SELECT * FROM Projet WHERE idProjet = ' + req.params.id + ');',
  function(err, project, fields) {
    if (err) throw err;
    res.render('project', { project: project[0] });
  });
});

router.post('/:id/bug/add', function(req, res, next) {
  connection.query("INSERT INTO Bug (sommaire, description, statut, projet) VALUES ('" + req.body.title + "', '" + req.body.description + "', '" + req.body.statut + "', '" + req.params.id + "');",
  function(err, project, fields) {
    if (err) throw err;
    res.redirect('/' + req.params.id);
  });
});

module.exports = router;
