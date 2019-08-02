exports.up = function(knex) {
  knex.schema.hasTable("monologues").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("monologues", t => {
          t.uuid("id").primary();
          t.string("play");
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("monologues");
};
