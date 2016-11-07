var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');

router.get('/:id', (req, res, next) => {
    knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.name as name', 'posts.votes as votes', 'posts.title as title', 'posts.description as description', 'posts.created_at as date', 'posts.image as image')
    .where('posts.id', req.params.id).first()
    .then((post) => {
      res.json(post);
    })
});

router.put('/:id', function(req, res, next) {
  if(!req.session.userInfo) {
    console.log('Need to be logged in to edit a post!');
  } else {
    let editedCity = {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
    }
      knex('posts').where('posts.id', req.body.postId).first()
          .update(editedCity, '*')
          .then(function(city) {
              res.json('city/post updated')
          })
  }

  router.delete('/:id', (req, res) => {
    knex('posts').where('posts.id', req.params.id).del()
    .then(() => {
    res.json('post deleted!')
  })
})

})

module.exports = router;
