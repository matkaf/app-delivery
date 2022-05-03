const sale = require('express').Router();
const saleController = require('../../app/controllers/saleController');

sale.post('/', saleController.create);
sale.get('/', saleController.getAll);

module.exports = sale;