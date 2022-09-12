const express = require('express');
const home_Controller = require('../controllers/home_controller');
const router = express.Router();

console.log('router loaded');

router.get('/', home_Controller.home);

module.exports = router;