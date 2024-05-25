var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/viajes-disponibles/', function(req, res, next) {
  res.render('viajesDisponibles.ejs', { title: 'Express' });
});

module.exports = router;
