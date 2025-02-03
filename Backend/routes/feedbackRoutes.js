const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.post('/', feedbackController.createFeedback)
router.get('/', feedbackController.getFeedbacks)
router.put('/:id', feedbackController.updateFeedback)
router.delete('/:id', feedbackController.deleteFeedback)

module.exports = router;