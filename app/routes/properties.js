var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/new', function(req, res, next) {
  res.render('add_property', {
    title: "Add property"
  });
  // res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  models.Property.create({ Name: req.body.name,
                       description: req.body.description,
                       price: req.body.price});
  res.redirect('/');
});



module.exports = router;
