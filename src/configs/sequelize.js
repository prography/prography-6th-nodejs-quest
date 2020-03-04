
const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": '127.0.0.1',
        "dialect": 'mysql',
        "operatorsAliases": false,
      },
}

module.exports = dbConfig;