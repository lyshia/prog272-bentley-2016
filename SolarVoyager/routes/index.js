var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar Bentley'
    });
});


router.get('/:id', function(request, response) {
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});



module.exports = router;
