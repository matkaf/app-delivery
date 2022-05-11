const seller = require('express').Router();
const sellerController = require('../../app/controllers/sellerController');

seller.get('/:id', sellerController.getBySellerId);

module.exports = seller;
