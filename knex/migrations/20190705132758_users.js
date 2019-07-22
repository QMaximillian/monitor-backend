exports.up = function(knex) {
  knex.schema.hasTable('users').then(function(exists) {
      return knex.schema.createTable("users", t => {
      t.uuid("id").primary();
      t.string("name");
      t.string("age");
    })
    .then(res => console.log(res));
  }) 
}
    

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
