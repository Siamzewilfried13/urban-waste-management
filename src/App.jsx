import React, { useState, useEffect } from 'react';
import RouteOptimization from './components/RouteOptimization';
import RecyclingTips from './components/RecyclingTips';
import FeedbackForm from './components/FeedbackForm';
import Analytics from './components/Analytics';


const WasteManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('route');
  const [routes, setRoutes] = useState([]);
  const [tips, setTips] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [routesRes, tipsRes, analyticsRes] = await Promise.all([
        fetch('http://localhost:5000/api/optimize-route'),
        fetch('http://localhost:5000/api/recycling-tips'),
        fetch('http://localhost:5000/api/analytics'),
      ]);

      setRoutes(await routesRes.json());
      setTips(await tipsRes.json());
      setAnalytics(await analyticsRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('route')}
            className={`px-4 py-2 rounded ${
              activeTab === 'route' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Route Optimization
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded ${
              activeTab === 'tips' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Recycling Tips
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2 rounded ${
              activeTab === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded ${
              activeTab === 'analytics' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Analytics
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        {activeTab === 'route' && <RouteOptimization routes={routes} />}
        {activeTab === 'tips' && <RecyclingTips tips={tips} />}
        {activeTab === 'feedback' && (
          <FeedbackForm feedback={feedback} setFeedback={setFeedback} />
        )}
        {activeTab === 'analytics' && analytics && <Analytics analytics={analytics} />}
      </main>
    </div>
  );
};

export default WasteManagementSystem;
