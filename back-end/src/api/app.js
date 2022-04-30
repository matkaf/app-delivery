const cors = require('cors');
require('express-async-errors');
const express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const errorMiddleware = require('../app/middleware/errorMiddleware');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
