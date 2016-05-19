var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar Bentley'
    });
});


router.get('/renewables', function(request, response) {
    console.log('Renewables called');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            console.log(json);
            response.send({
                result: 'Success',
                renewables: json
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

router.get('/renewablesByYear/:id', function(request, response) {
    console.log('Renewables by year called,', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var parsedJson = JSON.parse(data);
            //     console.log(Object.keys(parsedJson).length);
            for (var i = 0; i < Object.keys(parsedJson).length; i++) {
                var currJson = parsedJson[i];
                console.log(currJson.Year);
                if (currJson.Year === request.params.id) {
                    response.send({
                        result: 'Success',
                        renewables: currJson
                    });
                }
            }
        }


    });
});

module.exports = router;
