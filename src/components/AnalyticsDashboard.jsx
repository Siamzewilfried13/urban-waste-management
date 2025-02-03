import React, { useState } from "react";
import { Card } from "../card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie } from "recharts";
import { Activity, Truck, Recycle, AlertCircle } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState("monthlyWaste");

  // Sample data
  const wasteData = [
    { month: "Jan", waste: 400, recycled: 240 },
    { month: "Feb", waste: 300, recycled: 139 },
    { month: "Mar", waste: 200, recycled: 180 },
    { month: "Apr", waste: 278, recycled: 190 },
    { month: "May", waste: 189, recycled: 140 },
  ];

  const efficiencyData = [
    { name: "Route A", efficiency: 85 },
    { name: "Route B", efficiency: 78 },
    { name: "Route C", efficiency: 92 },
    { name: "Route D", efficiency: 88 },
  ];

  const feedbackData = [
    { name: "Positive", value: 400 },
    { name: "Neutral", value: 300 },
    { name: "Negative", value: 100 },
  ];

  // Key metrics
  const metrics = [
    {
      title: "Total Waste Collected",
      value: "1,367 tons",
      icon: <Activity className="h-4 w-4 text-blue-500" />
    },
    {
      title: "Average Route Efficiency",
      value: "65%",
      icon: <Truck className="h-4 w-4 text-green-500" />
    },
    {
      title: "Recycling Rate",
      value: "42.3%",
      icon: <Recycle className="h-4 w-4 text-yellow-500" />
    },
    {
      title: "Issues Reported",
      value: "24",
      icon: <AlertCircle className="h-4 w-4 text-red-500" />
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Waste Management Analytics
      </h1>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition duration-300">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-gray-100">{metric.icon}</div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{metric.title}</p>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex justify-center">
          <div className="flex space-x-6 border-b-2 border-gray-300">
            <button
              className={`${
                activeTab === "monthlyWaste"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              } py-2 px-4 text-lg font-semibold hover:text-blue-600 transition duration-300`}
              onClick={() => setActiveTab("monthlyWaste")}
            >
              Monthly Waste Analysis
            </button>
            <button
              className={`${
                activeTab === "routeEfficiency"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              } py-2 px-4 text-lg font-semibold hover:text-blue-600 transition duration-300`}
              onClick={() => setActiveTab("routeEfficiency")}
            >
              Route Efficiency Analysis
            </button>
            <button
              className={`${
                activeTab === "feedbackDistribution"
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              } py-2 px-4 text-lg font-semibold hover:text-blue-600 transition duration-300`}
              onClick={() => setActiveTab("feedbackDistribution")}
            >
              Feedback Distribution
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* Monthly Waste Analysis Tab */}
        {activeTab === "monthlyWaste" && (
          <Card className="p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Monthly Waste Analysis
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="waste" fill="#4B5563" name="Total Waste" />
                <Bar dataKey="recycled" fill="#10B981" name="Recycled" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        )}

        {/* Route Efficiency Analysis Tab */}
        {activeTab === "routeEfficiency" && (
          <Card className="p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Route Efficiency Analysis
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        )}

        {/* Feedback Distribution Tab */}
        {activeTab === "feedbackDistribution" && (
          <Card className="p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Feedback Distribution
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={feedbackData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
