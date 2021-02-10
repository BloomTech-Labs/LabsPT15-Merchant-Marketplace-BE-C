var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    // connection: {
    //   host: process.env.DATABASE_HOST || 'localhost',
    //   port: process.env.DATABASE_PORT || 3000,
    //   database: process.env.DATABASE_DB ||'postgres',
    //   user: process.env.DATABASE_USER || 'postgres',
    //   // dotenv isn't playing nice the the password entry specifically
    //   // replace generic password string with local instance password
    //   password: "password"
    // },
    migrations: { directory: 'data/migrations' },
    seeds: { directory: 'data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};
