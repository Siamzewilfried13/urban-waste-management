// Analytics.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Analytics from './components/Analytics';
const Analytics = () => {
  // Sample data - in a real app, this would come from your backend
  const monthlyData = [
    { month: 'Jan', organic: 120, recyclable: 90, other: 40 },
    { month: 'Feb', organic: 150, recyclable: 95, other: 45 },
    { month: 'Mar', organic: 130, recyclable: 100, other: 35 },
    { month: 'Apr', organic: 160, recyclable: 110, other: 50 },
    { month: 'May', organic: 140, recyclable: 105, other: 45 },
    { month: 'Jun', organic: 170, recyclable: 115, other: 55 }
  ];

  const efficiencyData = [
    { month: 'Jan', efficiency: 75 },
    { month: 'Feb', efficiency: 78 },
    { month: 'Mar', efficiency: 80 },
    { month: 'Apr', efficiency: 82 },
    { month: 'May', efficiency: 85 },
    { month: 'Jun', efficiency: 87 }
  ];

  const wasteComposition = [
    { name: 'Organic', value: 45 },
    { name: 'Recyclable', value: 30 },
    { name: 'Non-recyclable', value: 25 }
  ];

  const COLORS = ['#4CAF50', '#2196F3', '#FF5722'];

  const stats = {
    totalWaste: '850 tons',
    recyclingRate: '65%',
    costSavings: '$12,500',
    carbonReduction: '25 tons'
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Waste Management Analytics</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Waste Collected</h3>
          <p className="text-2xl font-bold">{stats.totalWaste}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Recycling Rate</h3>
          <p className="text-2xl font-bold text-green-600">{stats.recyclingRate}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Cost Savings</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.costSavings}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Carbon Reduction</h3>
          <p className="text-2xl font-bold text-green-600">{stats.carbonReduction}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Monthly Waste Collection */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Monthly Waste Collection</h2>
          <BarChart width={500} height={300} data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="organic" fill="#4CAF50" name="Organic" />
            <Bar dataKey="recyclable" fill="#2196F3" name="Recyclable" />
            <Bar dataKey="other" fill="#FF5722" name="Other" />
          </BarChart>
        </div>

        {/* Efficiency Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Efficiency Trend</h2>
          <LineChart width={500} height={300} data={efficiencyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              stroke="#2196F3" 
              name="Efficiency (%)"
            />
          </LineChart>
        </div>

        {/* Waste Composition */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Waste Composition</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={wasteComposition}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {wasteComposition.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Summary Statistics */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Collection Efficiency</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm text-gray-500">85% of target achieved</p>
            </div>
            <div>
              <h3 className="font-medium">Recycling Success Rate</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-500">65% materials successfully recycled</p>
            </div>
            <div>
              <h3 className="font-medium">Cost Optimization</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-500">75% cost efficiency achieved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;