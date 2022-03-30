var express = require('express');
var router = express.Router();

/* Page to GET fun facts about me. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Rajitha Bandaru' });
});

module.exports = router;
