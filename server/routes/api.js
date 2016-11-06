var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('reddit route');
  knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.name as name', 'posts.votes as votes', 'posts.title as title', 'posts.description as description', 'posts.created_at as date', 'posts.image as image')
    .then((posts) => {
    res.json(posts)
  })
});

module.exports = router;

// router.get('/', authorize, (req, res, next) => {
//   knex('posts')
//   .join('users', 'posts.user_id', 'users.id')
//   .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody')
//   .then((posts) => {
//     res.render('posts', {posts: posts});
//   })
// });
