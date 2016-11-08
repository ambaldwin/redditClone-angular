var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');


router.put('/', function(req, res, next) {
    let vote = {
      votes: req.body.votes
    }
      knex('posts').where('posts.id', req.body.postId).first()
          .update(vote, '*')
          .then(function(city) {
              res.json('votes updated')
        })
})


module.exports = router;
