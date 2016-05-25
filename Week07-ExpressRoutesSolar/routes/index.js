var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'ExpressRoutesSolar Bentley'
    });
});

router.get('/:id', function(request, response) {
  response.render(request.params.id, { title: 'ElfComponent' });
});

router.get('/renewables', function(request, response) {
    console.log('Renewables called');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            //  console.log(json[parseInt(request.params.id)]);
            for (var i = 0; i < module.exports.length; i++) {
                response.send({
                    result: 'Success',
                    renewables: json[parseInt(request.params.id)]
                });
                return;
            }
            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });

});


router.get('/renewableByIndex/:id', function(request, response) {
    console.log('Renewables by year called,', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            //  console.log(json[parseInt(request.params.id)]);
            for (var i = 0; i < module.exports.length; i++) {
                response.send({
                    result: 'Success',
                    renewables: json[parseInt(request.params.id)]
                });
                return;
            }
            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });

});

router.get('/renewableByYear/:id', function(request, response) {
    console.log('Renewables by year called,', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            var jsonData = json[parseInt(request.params.id)];
            //  console.log(json[parseInt(request.params.id)]);
            for (var i = 0; i < module.exports.length; i++) {
                response.send({
                    result: 'Success',
                    renewables: jsonData
                });
                return;
            }
            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });

});

module.exports = router;
