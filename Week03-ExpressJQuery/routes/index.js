var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prog-272 Alyshia Bentley Express' });
});

module.exports = router;
