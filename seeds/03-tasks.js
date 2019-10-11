exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'prep food'},
        {project_id: 1, description: 'cook food'},
        {project_id: 1, description: 'clean up'},
        {project_id: 2, description: 'gather clothes'},
        {project_id: 2, description: 'wash clothes'},
        {project_id: 2, description: 'dry clothes'},
      ]);
    });
};