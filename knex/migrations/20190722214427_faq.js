exports.up = function(knex) {
knex.schema.hasTable("faq").then(function(exists) {
    if (!exists) {
      return knex.schema
    .createTable("faq", t => {
          t.uuid("id").primary();
          t.string("question");
          t.string("answer");
        })
    }
  });
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists("faq");
};

