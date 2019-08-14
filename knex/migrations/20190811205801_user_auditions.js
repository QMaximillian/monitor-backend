exports.up = function(knex) {
  knex.schema.hasTable("user_auditions").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("user_auditions", t => {
        t.uuid("id").primary();
        t.string("time");
        t.uuid("audition_id");
        t.uuid("user_id");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_auditions");
};
