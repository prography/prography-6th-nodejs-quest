const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
module.exports = () => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}/prography-todo`)
  const db = mongoose.connection
  autoIncrement.initialize(db)
  db.on('error', console.error)
  db.once('open', () => {
    console.log('Connected to mongod server')
  })
}
