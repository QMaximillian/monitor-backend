exports.up = function(knex) {
  knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema
        .createTable("users", t => {
          t.uuid("id").primary();
          t.string("first_name");
          t.string("last_name");
          t.string("password");
          t.string("email");
          t.string("phone_number");
          t.string("gender");
          t.boolean("equity");
          t.integer("age");
          t.integer("feet");
          t.integer("inches");
          t.string('birthday')
        })
    } 
  }) 
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
