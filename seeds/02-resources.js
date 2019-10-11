exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'trackpad'},
        {name: 'cofffee'},
        {name: 'tea'},
        {name: 'ketchup'},
        {name: 'pot'},
        {name: 'mouse'},
      ]);
    });
};
