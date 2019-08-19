exports.up = function(knex) {
  knex.schema.hasTable("instructions").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("instructions", t => {
        t.uuid("id").primary();
        t.string("instruction");
        t.uuid("audition_id");
        
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
