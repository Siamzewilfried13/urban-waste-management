class WasteManager {
    constructor() {
      this.collectionPoints = [];
      this.routes = {};
      this.collectionDays = {}; // Store collection days
    }
  
    addCollectionPoint(point, day) {
      if (!this.collectionPoints.includes(point)) {
        this.collectionPoints.push(point);
        this.collectionDays[point] = day; // Assign a collection day
      }
    }
  
    addRoute(start, end, distance) {
      if (!this.routes[start]) {
        this.routes[start] = {};
      }
      this.routes[start][end] = distance;
    }
  
    optimizeRoutes() {
      const optimizedRoute = [];
      const visited = new Set();
      let currentPoint = this.collectionPoints[0]; // Start from the first point
  
      while (visited.size < this.collectionPoints.length) {
        optimizedRoute.push(currentPoint);
        visited.add(currentPoint);
        let nextPoint = null;
        let minDistance = Infinity;
  
        for (const [neighbor, distance] of Object.entries(this.routes[currentPoint] || {})) {
          if (!visited.has(neighbor) && distance < minDistance) {
            minDistance = distance;
            nextPoint = neighbor;
          }
        }
  
        currentPoint = nextPoint || null;
      }
  
      return optimizedRoute;
    }
  
    getCollectionDay(point) {
      return this.collectionDays[point] || 'Not Assigned';
    }
  }
  
  module.exports = { WasteManager };
  