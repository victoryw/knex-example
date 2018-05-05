
exports.seed = function(knex, Promise) {
  return knex('example').del()
    .then(function () {
      // Inserts seed entries
      return knex('example').insert([
        {sample: 1},
        {sample: 2},
        {sample: 3}
      ]);
    });
};
