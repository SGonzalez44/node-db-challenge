exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projects_name: 'landing page', description: 'sprint 1', completed:false},
        {projects_name: 'react app', description: 'sprint 2', completed:false},
        {projects_name: 'api', description: 'sprint 3', completed:false}
      ]);
    });
};