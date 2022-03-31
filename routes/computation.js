var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.cos(x);
  var y2 = Math.asin(x);
  var y3 = Math.asinh(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.cos(${x}) is ${y1} ; Math.asin(${x}) is ${y2} ; Math.asinh(${x}) is ${y3}\n`);
});

module.exports = router;