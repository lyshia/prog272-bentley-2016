var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Bentley' });
});

router.get('/read', function(request, response) {
  console.log("read was called into the server", request.params);
  response.send([
    {name: 'SarahLee'},
    {name: 'Bob', myArray: [1,2,3]},
    {result: parseInt(request.query.OperatorA) + parseInt(request.query.OperatorB)}
  ]);
});

router.get('/readDerp', function(request, response) {
  console.log("derpy was called into the server");
  response.send([
    {name: 'Derpina'},
    {name: 'Derperson'}
  ]);
});


router.get('/:id',function(request, response){
  response.send(request.params.id);
});

module.exports = router;
