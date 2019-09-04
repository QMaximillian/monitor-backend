exports.up = function(knex, Promise) {
  return knex.schema.table("appointments", function(table) {
    table.dropColumn("time");
  });
};

exports.down = function(knex) {
  return knex.schema.table("appointments", function(table) {
    table.string("time");
  });
};