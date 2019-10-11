exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'food-prep'},
        {project_id: 1, description: 'code'},
        {project_id: 1, description: 'stock-toilet'},
        {project_id: 2, description: 'youtube'},
        {project_id: 2, description: 'wash'},
        {project_id: 2, description: 'cash-checks'},
      ]);
    });
};