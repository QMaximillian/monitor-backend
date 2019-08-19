exports.up = function(knex) {
  knex.schema.hasTable("todos").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("todos", t => {
        t.uuid("id").primary();
        t.string("task");
        t.boolean("completed");
        t.uuid("audition_id");
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos");
};
