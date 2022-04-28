const login = require('express').Router();
const loginController = require('../../app/controllers/loginController');

login.post('/', loginController.auth);

module.exports = login;