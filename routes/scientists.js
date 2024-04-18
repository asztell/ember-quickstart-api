var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(['Dennis Ritchie', 'Ken Thompson', 'Brian Kernighan', 'Linus Torvalds', 'Bjarne Stroustrup']));
  res.end();
});

module.exports = router;
