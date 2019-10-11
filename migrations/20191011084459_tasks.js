
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
      tbl.increments()
      tbl.integer('project_id', 6)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      tbl.string('description', 255)
        .notNullable()
      tbl.text('notes', 500)
        .nullable()
      tbl.binary('completed', 1)
        .defaultTo(0)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
  };