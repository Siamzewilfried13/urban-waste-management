const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/userLogin');

router.post('/', loginControllers.loginUser);

module.exports = router;