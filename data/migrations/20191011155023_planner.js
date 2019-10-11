exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();//unique id
        tbl.string('projects_name')//required
          .notNullable()
        tbl.string('description')//optional
        tbl.boolean('completed')//required default false
          .notNullable()
          .defaultTo(false) 
    })
    .createTable('task', tbl => {
        tbl.increments()//unique id
        tbl.string('description')//required
          .notNullable()
        tbl.string('notes', 255)//optional
        tbl.boolean('completed')//required defaults to false
          .defaultTo(false)
          .notNullable()
  
        tbl.integer('projects_id')//foreign key references id in projects table
          .references('id')
          .inTable('projects')
          .unsigned()
          .notNullable()
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
    .createTable('projects_resource', tbl => {
        tbl.increments()
        tbl.integer('projects_id')//foreign key references id in projects table
          .references('id')
          .inTable('projects')
          .unsigned()
          .notNullable()
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('resource_id')//foreign key references id in resource table
          .references('id')
          .inTable('resource')
          .unsigned()
          .notNullable()
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
    .createTable('resource', tbl => {
        tbl.increments()//unique id
        tbl.string('resource_name')
          .notNullable()
        tbl.string('description')
    })
       
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resource')
    .dropTableIfExists('projects_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('projects')
  };