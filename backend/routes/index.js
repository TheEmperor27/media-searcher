var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('hi there!');
});

module.exports = router;
