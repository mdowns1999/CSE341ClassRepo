const routes = require('express').Router();
const controller = require('../controllers/index');

//routes.get('/', controller.displaySimpleName);
routes.get('/', controller.getAllContacts);
routes.get('/singleContact/:id', controller.getSingleContactByID);

module.exports = routes;