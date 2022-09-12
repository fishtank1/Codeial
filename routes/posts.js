const { application } = require('express');
const express = require('express');
const router = express.Router();

const posts_Controller = require('../controllers/posts_controller');

router.get('/post', posts_Controller.post);

module.exports = router;