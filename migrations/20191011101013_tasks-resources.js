  
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id', 6)
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
      tbl.integer('resources_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
  };