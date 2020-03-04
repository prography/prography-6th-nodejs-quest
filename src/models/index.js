import fs from 'fs'
import path from 'path'

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../configs', 'sequelize'/*, 'config.json'*/))[env];
//const config = require(__dirname + '/../configs/sequelize.js')[process.env.NODE_ENV]
//const basename = path.basename(__filename)

const dotenv = require('dotenv');
dotenv.config();

const models = {}
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, config);

models.sequelize = sequelize
models.Sequelize = Sequelize

models.todo = require('./todo')(sequelize, Sequelize);
models.comment = require('./comment')(sequelize, Sequelize);
//models.tag = require('./tag')(sequelize, Sequelize);

models.todo.hasMany(models.comment, { sourcekey: 'id' });
models.comment.belongsTo(models.todo, { targetkey: 'id'});

/*models.todo.belongsToMany(models.tag, {
  through: 'todo_tag',
  foreignKey: 'id'
});

models.tag.belongsToMany(models.todo, {
  through: 'todo_tag',
  foreignKey: 'id'
});*/



module.exports = models;