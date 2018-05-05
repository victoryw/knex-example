// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:r0ys1ngh4m@localhost:5434/test_knex',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
