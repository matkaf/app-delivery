const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', userRouter);

module.exports = app;
