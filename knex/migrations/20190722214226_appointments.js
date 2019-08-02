exports.up = function(knex) {
  knex.schema.hasTable("appointments").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("appointments", t => {
          t.uuid("id").primary();
          t.string("time")
          t.uuid('audition_id')
          t.uuid('user_id')
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("appointments");
};

