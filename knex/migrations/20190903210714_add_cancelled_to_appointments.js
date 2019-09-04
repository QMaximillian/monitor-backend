exports.up = function(knex) {
    return knex.schema.table("appointments", function(table) {
      table.string("cancelled");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("appointments", function(table) {
    table.dropColumn("cancelled");
  });
};
