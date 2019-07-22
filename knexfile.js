// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    version: "11.4",
    connection: {
      host: "127.0.0.1",
      user: "quinnlashinsky",
      password: "",
      database: "testdb"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  //   production: {
  //     client: "postgresql",
  //     connection: {
  //       database: "my_db",
  //       user: "username",
  //       password: "password"
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: "knex_migrations"
  //     }
  //   }
};
