const product = require('express').Router();
const productController = require('../../app/controllers/productController');

product.post('/', productController.create);
product.get('/', productController.getAll);

module.exports = product;