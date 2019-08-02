exports.up = function(knex) {
  knex.schema.hasTable("theaters").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("theaters", t => {
          t.uuid("id").primary();
          t.string("name");
          t.integer("street_num");
          t.string("street_address");
          t.string("city");
          t.string("state");
          t.string("zip_code");
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("theaters");
};
