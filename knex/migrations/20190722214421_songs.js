exports.up = function(knex) {
  knex.schema.hasTable("songs").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("songs", t => {
          t.uuid("id").primary();
          t.string("name");
    
        })
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("songs");
};

