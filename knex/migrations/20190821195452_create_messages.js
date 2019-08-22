exports.up = function(knex) {
  knex.schema.hasTable("messages").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("messages", t => {
        t.uuid("id").primary();
        t.string("text");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages");
};
