const user = require('express').Router();
const userController = require('../../app/controllers/userController');

user.get('/search', userController.getByRole);
user.delete('/:id', userController.deleteById);
user.put('/:id', userController.update);
user.get('/:id', userController.getById);
user.post('/', userController.create);
user.get('/', userController.getAll);

module.exports = user;
