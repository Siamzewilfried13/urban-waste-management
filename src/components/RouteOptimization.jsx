import React from 'react';

const RouteOptimization = ({ routes }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Optimized Collection Routes</h2>
      <div className="space-y-4">
        {routes.map((route, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="font-semibold">Route {index + 1}</h3>
            <p>Location: {route.location.address}</p>
            <p>Waste Amount: {route.wasteAmount}kg</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteOptimization;
