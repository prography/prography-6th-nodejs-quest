import express from 'express';
import createError from 'http-errors'
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

var app = express();
const bodyParser = require('body-parser');



const todosRoutes = require('./routes/todos');
//const commentsRoutes = require('./routes/comments');
var sequelize = require('./models').sequelize;
sequelize.sync();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cookieParser());
app.use('/todos',todosRoutes);
//app.use('/todos/:todoID/comments',commentsRoutes);

//app.use('/hello-world', (req, res) => {
  //res.send('hello world');
//})

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  let apiError = err

  if (!err.status) {
    apiError = createError(err)
  }

  res.locals.message = apiError.message
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}

  return res.status(apiError.status)
    .json({message: apiError.message})
})




export default app;
