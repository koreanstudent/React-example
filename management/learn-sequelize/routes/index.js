var express = require('express');
var User = require('../models').User;


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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


// router.get('/api/customers', (req,res) => {
//   res.send([
//   {'id': 1,
//     'name': 'mike'
//   },
//   {'id': 2,
//   'name': 'hhhhhhhhhhhhhe'  
//   }
//   ]);
// });

module.exports = router;
