var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');
const bodyparser = require('body-parser');



/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({}).then(function(user){
    res.json(user);
  })
});

router.post('/login', function(req, res, next) {

  const inputusername = req.body.username;
  const inputpassword = req.body.password;

  user.findOne({username: inputusername}).then(function(checkuser){
    console.log(inputusername);
    console.log(inputpassword);
      if (checkuser) {
        if (checkuser.password === inputpassword) {
          res.redirect('/secrets');
        }
      }
  })
});


router.post('/register', function(req, res, next){
  user.create(
    {username: req.body.username,
     password: req.body.password})
     .then(function(user){
      res.json(user);
  })
});




module.exports = router;
