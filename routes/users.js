const { application } = require('express');
const express = require('express');
const router = express.Router();

const users_Controller = require('../controllers/users_controller');

router.get('/profile', users_Controller.profile);
router.use('/posts', require('./posts'));

module.exports = router;