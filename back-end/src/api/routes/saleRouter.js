const sale = require('express').Router();
const saleController = require('../../app/controllers/saleController');

sale.get('/:id', saleController.getById);
sale.post('/', saleController.create);
sale.get('/', saleController.getAll);

module.exports = sale;