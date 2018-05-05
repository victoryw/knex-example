
exports.up = (knex, Promise) => {
  return Promise.all([
      knex.schema.createTable('example', table => {
        table.increments('id');
        table.integer('sample').notNull().defaultTo(0);
      })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
      knex.schema.dropTable('example')
  ])
};
