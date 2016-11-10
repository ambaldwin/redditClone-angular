exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([{
        user_id: 1,
        post_id: 1,
        text: 'Great place!'
      },
      {
        user_id: 2,
        post_id: 2,
        text: 'Never been there...'
      },
      {
        user_id: 3,
        post_id: 3,
        text: 'Been wanting to go there!'
      }]);
    });
};
