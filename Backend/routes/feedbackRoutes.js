const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.post('/', feedbackController.createFeedback);

module.exports = router;