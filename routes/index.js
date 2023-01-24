const express = require('express');
const router = express.Router();

router.use('/api-docs', require('./swagger'));

router.use('/contacts', require('./contacts'));

module.exports = router;
