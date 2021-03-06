const environment = process.env.ENVIRONMENT || "development";

const config = require("../knexfile.js")[environment];
var knex = require("knex")(config);

module.exports = knex;

knex.migrate.latest([config]);


// echo "knex seed:make $(date +%s)_table_name" | pbcopy