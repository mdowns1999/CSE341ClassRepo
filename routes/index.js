const routes = require('express').Router();

routes.get('/', (req, res) => {
   res.send('Jami Knight');
})

module.exports = routes;