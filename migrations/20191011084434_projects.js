exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 255)
        .notNullable()
      tbl.string('description', 255)
        .nullable()
      tbl.binary('completed', 1)
        .notNullable()
        .defaultTo(0)
    })
    
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
  };