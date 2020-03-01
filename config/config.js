const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: "+09:00"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
};

export default config;
