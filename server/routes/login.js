var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('users')
        .where('name', req.body.name)
        .first()
        .then((user) => {
            var passwordMatch = bcrypt.compareSync(req.body.password, user.hash)
            if (passwordMatch == false) {
                console.log('bad email or password in route!');
            } else {
                req.session.userInfo = user
                res.send('User logged in!')
            }
        })
});

router.get('/', (req, res, next) => {
    req.session = null;
    res.send('User logged out!')
})

module.exports = router;
