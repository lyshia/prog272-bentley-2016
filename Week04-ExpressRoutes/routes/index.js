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


router.get('/add', function(request, response){
  console.log(" add was called");
  console.log(" the parameters are" + request.query);
  console.log("operator a is " + request.query.operatorA);
  console.log("operator b is " + request.query.operatorB);
  var operatorA = parseInt(request.query.operatorA);
  var operatorB = parseInt(request.query.operatorB);
  var sum ;
  response.send( {sum: operatorA + operatorB});
})

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
