exports.up = function(knex) {
  knex.schema.hasTable("roles").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("roles", t => {
        t.uuid("id").primary();
        t.string("role");
        t.uuid("user_id");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("roles");
};
