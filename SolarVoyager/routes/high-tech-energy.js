var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(request, response) {
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
/*
router.get('/overview', function(request, response) {
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
router.get('/energyTypes', function(request, response) {
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
*/

router.get('/:id', function(request, response) {

    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});




module.exports = router;
