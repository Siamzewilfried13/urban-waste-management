// In your backend route file (e.g., routes/analytics.js)
const express = require('express');
const router = express.Router();

router.get('/api/analytics', (req, res) => {
  const mockData = {
    wasteCollection: [
      { date: '2024-01', wasteCollected: 100, recycledAmount: 40 },
      { date: '2024-02', wasteCollected: 120, recycledAmount: 45 },
      { date: '2024-03', wasteCollected: 90, recycledAmount: 35 },
    ],
    feedbackStats: [
      { category: 'Positive', count: 50 },
      { category: 'Neutral', count: 30 },
      { category: 'Negative', count: 20 },
    ]
  };
  
  res.json(mockData);
});

module.exports = router;