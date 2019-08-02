exports.up = function(knex) {
  knex.schema.hasTable("info").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("info", t => {
          t.uuid("id").primary();
          t.string("info");
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("info");
};

