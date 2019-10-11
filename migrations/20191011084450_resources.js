
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name', 255)
        .notNullable()
        .unique()
      tbl.string('description')
        .nullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
  };