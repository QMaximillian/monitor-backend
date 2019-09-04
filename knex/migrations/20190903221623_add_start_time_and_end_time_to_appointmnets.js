exports.up = function(knex) {
  return knex.schema.table("appointments", function(table) {
    table.string("start_time");
    table.string("end_time");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("appointments", function(table) {
    table.dropColumn("start_time");
    table.dropColumn("end_time");
  });
};
