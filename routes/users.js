const { application } = require('express');
const express = require('express');
const router = express.Router();

const users_Controller = require('../controllers/users_controller');
const posts_Controller = require('../controllers/posts_controller');

router.get('/', users_Controller.profile);
router.get('/sign-up', users_Controller.sign_up);
router.get('/sign-in', users_Controller.sign_in);
router.use('/posts', posts_Controller.post);

module.exports = router;