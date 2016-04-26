var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Express Routes Bentley' });
});

router.get('/read', function(request, response){
  response.send([{"name": "Alyshia Bentley"} , {"name": "bob smith"}]);
});

module.exports = router;
