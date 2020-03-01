import Sequelize from "sequelize";
import config from "./config";

const conf = config[process.env.NODE_ENV];
console.log(conf);

const sequelize = new Sequelize(
  conf.database,
  conf.username,
  conf.password,
  conf
);

sequelize.sync({ force: true });

export default sequelize;
