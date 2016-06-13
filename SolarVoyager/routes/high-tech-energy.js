var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(request, response) {
    'use strict';
    console.log('EnergyTypes called');
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

router.get('/:id', function(request, response) {
    'use strict';
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
