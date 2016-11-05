var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('reddit route');
  knex('posts').then((posts) => {
    res.json(posts)
  })
});

module.exports = router;
