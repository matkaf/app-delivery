const cors = require('cors');
const express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const validateInputs = require('../app/middlewares/validateInputs');

const app = express();

app.use(cors());

app.use(express.json());

app.use(validateInputs);// valida entrada da api (req.body) pra os endpoints abaixo

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', userRouter);
app.use('/login', loginRouter);

module.exports = app;
