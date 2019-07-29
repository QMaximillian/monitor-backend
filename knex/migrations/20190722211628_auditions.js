exports.up = function(knex) {
  knex.schema.hasTable("auditions").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("auditions", t => {
          t.uuid("id").primary();
          t.string("date");
          t.string("begin_time");
          t.string("end_time");
          t.integer("interval");
          t.integer("street_num");
          t.string("street_address");
          t.string("city");
          t.string("state");
          t.string("zip_code");
          t.uuid('monitor_id');
        })
        .then(res => console.log(res));
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auditions");
};
