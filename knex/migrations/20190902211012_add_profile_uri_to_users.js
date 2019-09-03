
exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
        table
          .string("profile_uri")
          .notNull()
          .defaultTo(
            "https://www.colchestersun.com/wp-content/uploads/2018/01/user-dummy.png"
          );
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(table) {
    table.dropColumn("profile_uri");
  });
};
