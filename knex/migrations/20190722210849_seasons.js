exports.up = function(knex) {
  knex.schema.hasTable("seasons").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("seasons", t => {
          t.uuid("id").primary();
          t.string("name");
          t.integer("year");
          t.integer("season_number");
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("seasons");
};
