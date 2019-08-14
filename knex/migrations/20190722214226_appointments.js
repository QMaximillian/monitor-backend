exports.up = function(knex) {
    return knex.schema.dropTableIfExists("appointments");
};

exports.down = function(knex) {
  knex.schema.hasTable("appointments").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("appointments", t => {
        t.uuid("id").primary();
        t.string("name");
        t.string("description");
      });
    }
  });
};


