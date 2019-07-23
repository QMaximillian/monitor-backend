exports.up = function(knex) {
  knex.schema.hasTable("amenities").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("amenities", t => {
          t.uuid("id").primary();
          t.string("name");
          t.string("description");
        })
        .then(res => console.log(res));
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("amenities");
};
