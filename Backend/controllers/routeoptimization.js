const { WasteManager } = require('../routes');  // Assuming the logic is still in routes.js

const manager = new WasteManager();

// Add a collection point
const addCollectionPoint = (req, res) => {
  const { point, day } = req.body;

  if (!point || !day) {
    return res.status(400).json({ error: 'Point and day are required' });
  }

  manager.addCollectionPoint(point, day);
  return res.status(200).json({ message: 'Collection point added successfully' });
};

// Add a route between collection points
const addRoute = (req, res) => {
  const { start, end, distance } = req.body;

  if (!start || !end || !distance) {
    return res.status(400).json({ error: 'Start, end, and distance are required' });
  }

  manager.addRoute(start, end, distance);
  return res.status(200).json({ message: 'Route added successfully' });
};

// Get all collection points and their assigned days
const getCollectionPoints = (req, res) => {
  const collectionPoints = manager.collectionPoints.map(point => ({
    point,
    day: manager.getCollectionDay(point),
  }));

  return res.status(200).json(collectionPoints);
};

// Get optimized route based on the routes and collection points
const optimizeRoute = (req, res) => {
  const optimizedRoute = manager.optimizeRoutes();
  return res.status(200).json(optimizedRoute);
};

module.exports = {
  addCollectionPoint,
  addRoute,
  getCollectionPoints,
  optimizeRoute,
};
