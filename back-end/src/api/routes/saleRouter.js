const sale = require('express').Router();
const saleController = require('../../app/controllers/saleController');

sale.post('/', saleController.create);

module.exports = sale;