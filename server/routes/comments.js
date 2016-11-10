var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.post('/', (req, res, next) => {
    if (!req.session.userInfo) {
        const error = {
            message: 'You need to be logged in to submit a comment!'
        }
        res.status(403)
        res.json(error)
    } else {
        let newComment = {
            user_id: req.session.userInfo.id,
            post_id: req.body.postId,
            text: req.body.text
        }
        knex('comments').insert(newComment, '*')
            .then((results) => {
                res.json(results);
            })
    }
});


module.exports = router;
