var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    models.User.findAll({
        include: [ models.Task ]
    }).then(function(users) {
        res.render('index', {
            title: 'Epress with Sequelize',
            users: users
        });
    });
});

router.get('/test', function(req, res, next) {
  // res.send('test');
  res.jsonp({ user: 'tobi' });
});

module.exports = router;
