const product = require('express').Router();
const productController = require('../../app/controllers/productController');

product.delete('/:id', productController.deleteById);
product.get('/:id', productController.getById);
product.put('/:id', productController.update);
product.post('/', productController.create);
product.get('/', productController.getAll);

module.exports = product;