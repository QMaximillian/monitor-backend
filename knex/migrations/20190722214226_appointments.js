exports.up = function(knex) {
  knex.schema.hasTable("appointments").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("appointments", t => {
          t.uuid("id").primary();
          t.string("time")
        })
        .then(res => console.log(res));
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("appointments");
};

