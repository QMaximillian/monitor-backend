exports.up = function(knex) {
  return knex.schema.table("appointments", function(table) {
    table.string("actual_start");
    table.string("actual_end");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("appointments", function(table) {
    table.dropColumn("actual_start");
    table.dropColumn("actual_end");
  });
};
