var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar Bentley'
    });
});

router.get('/high-tech-energy/overview', function(request, response) {
    console.log('Energy Overview called');
    fs.readFile('data/EnergyTypes.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            response.send({
                result: 'Success',
                overview: json
            });
        }
    });

});
router.get('/high-tech-energy/energyTypes', function(request, response) {
    console.log('Energy Overview called');
    fs.readFile('data/EnergyTypes.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            var arr = [];
            for (var i = 0; i < json.length; i++) {
                if (!arr.contains(json[i].Description)) {
                    arr.push(json[i].Description);
                }
            }
            return arr;
            response.send({
                result: 'Success',
                overview: arr
            });
        }
    });

});



/*
router.get('/high-tech-energy/type', function(request, response) {
    console.log('Energy Overview called');
    fs.readFile('data/EnergyTypes.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
          var json = JSON.parse(data);

          const unique = [...new Set(json.map(item => item.Description))];

        //  for (var i = 0; i < json.length; i++) {
            //  if (json[i].Description === request.params.id) {
              //    response.send({
                      result: 'Success',
                      renewables: unique.Description
                //  });
              //    return;
            //  }
        //  }
        //  response.send({
        //      result: 'Failure',
        //      renewables: null
      //    });
      }
  });

});
*/


router.get('/:id', function(request, response) {
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});


router.get('/high-tech-energy/:id', function(request, response) {

    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});



module.exports = router;
