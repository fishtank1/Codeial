const express = require('express');
const home_Controller = require('../controllers/home_controller');
const router = express.Router();

console.log('router loaded');

router.get('/', home_Controller.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

// for any further routes, aceess from here
// routes.use('/routeName', require('./routeFile'));

module.exports = router;