const customer = require('express').Router();
const customerController = require('../../app/controllers/customerController');

customer.get('/:id', customerController.getByCustomerId);

module.exports = customer;
