exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.string('title')
    table.string('description', 3000).notNullable()
    table.string('image')
    table.integer('votes').defaultTo(0)
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
