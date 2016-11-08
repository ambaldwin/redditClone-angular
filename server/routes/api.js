var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
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



router.post('/', (req, res, next) => {
  if(!req.session.userInfo) {
    // let err = new Error()
    console.log('Need to be logged in to submit a post!');
  } else {
  let newCity = {
    user_id: req.session.userInfo.id,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    votes: 0
  }
  knex('posts').insert(newCity,'*')
    .then((results) => {
    res.json(results);
  })
}
});

module.exports = router;
