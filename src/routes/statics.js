
//Routes

const express = require('express');
const router = express.Router();
const controller = require('../controllers/staticsController');

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/contacto', controller.contact);

// Lo exporto como módulo

module.exports = router;