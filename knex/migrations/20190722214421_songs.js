exports.up = function(knex) {
  knex.schema.hasTable("songs").then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("songs", t => {
          t.uuid("id").primary();
        t.string("name");
    
        })
        .then(res => console.log(res));
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("songs");
};

