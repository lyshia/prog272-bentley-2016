var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week05-ExpressRoutesSolar Bentley' });
});


router.get('/renewables', function(request, response) {
  console.log('Renewables called');

  fs.readFile('data/Renewable.json', 'utf-8', function(err, data)
{
  if (err) throw err;
  console.log(data);
  response.send({result: 'Success', renewables: data});
} );

});

module.exports = router;
