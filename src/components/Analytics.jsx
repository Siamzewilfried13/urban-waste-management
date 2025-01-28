import React, { useEffect, useState } from "react";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/analytics");
        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAnalytics();
  }, []);

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg max-w-md mx-auto mt-8">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center mt-16">
        <div className="loader mx-auto mb-4"></div>
        <p>Loading analytics data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Waste Management Analytics
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Total Waste Collected:</span>
          <span className="text-gray-900 font-semibold">{analytics.totalWaste} kg</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Recycled Waste:</span>
          <span className="text-gray-900 font-semibold">{analytics.recycledWaste} kg</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Efficiency:</span>
          <span className="text-green-600 font-semibold">{analytics.efficiency}</span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
