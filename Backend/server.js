// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import the controller functions
const wasteController = require('./controllers/wasteController'); // Path to your controller

// Initialize the express app
const app = express();

// Set the port for the server
const port = 5000;

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Allows Express to parse JSON requests

// Set up routes and associate them with controller functions
app.post('/api/add-collection-point', wasteController.addCollectionPoint); // Add collection point
app.post('/api/add-route', wasteController.addRoute); // Add route
app.get('/api/collection-points', wasteController.getCollectionPoints); // Get all collection points
app.get('/api/optimize-route', wasteController.optimizeRoute); // Get optimized route

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
