import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from 'recharts';

const Analytics = ({ analytics }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">System Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Total Collection Points</h3>
          <p className="text-2xl">{analytics.totalCollectionPoints}</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Total Waste</h3>
          <p className="text-2xl">{analytics.totalWaste}kg</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Average Waste/Point</h3>
          <p className="text-2xl">{analytics.averageWastePerPoint.toFixed(2)}kg</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Collection Efficiency</h3>
          <p className="text-2xl">{analytics.collectionEfficiency.toFixed(1)}%</p>
        </div>
      </div>
      <div className="h-64">
        <LineChart width={800} height={250} data={[analytics]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="collectionEfficiency" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Analytics;
