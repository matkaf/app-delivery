const product = require('express').Router();
const productController = require('../../app/controllers/productController');

product.get('/:id', productController.getById);
product.put('/:id', productController.update);
product.post('/', productController.create);
product.get('/', productController.getAll);

module.exports = product;