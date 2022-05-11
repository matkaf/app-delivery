const sale = require('express').Router();
const { verifyJWT } = require('../../app/auth/generatorJwt');
const saleController = require('../../app/controllers/saleController');

sale.delete('/:id', saleController.deleteById);
sale.put('/:id', saleController.update);
sale.get('/:id', saleController.getById);
sale.post('/', verifyJWT, saleController.create);
sale.get('/', saleController.getAll);

module.exports = sale;
