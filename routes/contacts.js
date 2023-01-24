const express = require('express');
const routes = express.Router();
const controller = require('../controllers/index');

//routes.get('/', controller.displaySimpleName);
routes.get('/', controller.getAllContacts);
routes.get('/:id', controller.getSingleContactByID);
routes.put('/:id', controller.updateContact);
routes.post('/', controller.insertContact);
routes.delete('/:id', controller.deleteContact);
module.exports = routes;
