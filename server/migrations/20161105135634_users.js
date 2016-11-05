exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('email')
    table.specificType('hash', 'character(60)')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
