exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'annabaldwin',
        email: 'anna@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        name: 'ellenbaldwin',
        email: 'ellen@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },
      {
        name: 'benfox',
        email: 'ben@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      }]);
    });
};
