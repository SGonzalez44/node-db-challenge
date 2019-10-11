
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'washer'},
        {name: 'dryer'},
        {name: 'tide pods'},
        {name: 'stove'},
        {name: 'pots'},
        {name: 'pans'},
      ]);
    });
};