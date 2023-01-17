const express = require('express');
const routes = express.Router();
const controller = require('../controllers/index');

routes.get('/', controller.displaySimpleName);
routes.get('/contacts', controller.getAllContacts);
routes.get('/singleContact/:id', controller.getSingleContactByID);

module.exports = routes;