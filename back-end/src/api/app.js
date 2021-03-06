const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('../app/middlewares/errorMiddleware');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');
const sellerRouter = require('./routes/sellerRouter');
const customerRouter = require('./routes/customerRouter');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/images', express.static('public')); // https://expressjs.com/pt-br/starter/static-files.html

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/seller', sellerRouter);
app.use('/customer', customerRouter);

app.use(errorMiddleware);

module.exports = app;
