const user = require('express').Router();
const userController = require('../../app/controllers/userController');

user.post('/', userController.create);
user.get('/', userController.getAll);

module.exports = user;
