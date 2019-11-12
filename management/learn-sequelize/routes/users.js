var express = require('express');
var User = require('../models').User;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/customers', (req,res, next) => {
  User.findAll()
  .then((users) =>{
    res.json(users);
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});

module.exports = router;
