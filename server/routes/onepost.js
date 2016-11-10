var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');

router.get('/:id', (req, res, next) => {
    knex('posts')
    .where('posts.id', req.params.id)
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.name as name', 'posts.votes as votes', 'posts.title as title', 'posts.description as description', 'posts.created_at as date', 'posts.image as image')
    .then((posts) => {
      var postComments = posts;
      knex('comments').then(comments =>{
        postComments.forEach(post => {
          post.comments = []
          comments.forEach(comment => {
            if (post.postId === comment.post_id) {
              post.comments.push(comment)
            }
          })
        })
        res.json(postComments)
      })
  })
});

router.put('/:id', function(req, res, next) {
  if(!req.session.userInfo) {
    const error = {
      message: 'You need to be logged in to edit a post!'
    }
    res.status(403)
    res.json(error)
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
})

router.delete('/:id', (req, res) => {
  knex('posts').where('posts.id', req.params.id).del()
  .then(() => {
    res.json('post deleted!')
  })
})

module.exports = router;
