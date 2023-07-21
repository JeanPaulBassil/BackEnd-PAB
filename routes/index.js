console.log("start of routes")

let express = require('express');
let router = express.Router();
let db = require('../models')
let config = require('../config/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({title: 'Express'})
});

module.exports = router;


console.log("end of routes")