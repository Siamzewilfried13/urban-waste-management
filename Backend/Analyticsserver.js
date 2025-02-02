app.get('/api/analytics', (req, res) => {
    const analyticsData = {
      totalWaste: 1200, // Example value
      recycledWaste: 500,
      efficiency: ((500 / 1200) * 100).toFixed(2), // Convert to percentage
    };
  
    res.json(analyticsData);
  });
  