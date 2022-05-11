const user = require('express').Router();
const userController = require('../../app/controllers/userController');
const { verifyJWT, verifyRoleToken } = require('../../app/auth/generatorJwt');

user.get('/search', userController.getByRole);
user.post('/admin', verifyRoleToken, verifyJWT, userController.create);
user.delete('/:id', userController.deleteById);
user.put('/:id', userController.update);
user.get('/:id', userController.getById);
user.post('/', userController.create);
user.get('/', userController.getAll);

module.exports = user;
