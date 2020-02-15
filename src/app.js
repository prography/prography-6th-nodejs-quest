import express from 'express';

const app = express();

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

export {
  app
};
