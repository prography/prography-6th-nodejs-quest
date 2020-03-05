import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const mongoURI = 'mongodb://localhost:27017/tododb';
const todosRouter = require('./routes/todos');
const app = express();
const db = mongoose.connection;

mongoose.set('useFindAndModify', false);
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/hello-world', (req, res) => {
  res.send('hello world');
});

app.use('/todos', todosRouter);

// Error Handler (https://levelup.gitconnected.com/how-to-handle-errors-in-an-express-and-node-js-app-cb4fe2907ed9)
app.use((error, req, res) => {
  console.error(error);
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.massage || 'Server Error',
    }
  })
});

export default app;
