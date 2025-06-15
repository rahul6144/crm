import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Chart as ChartJS, registerables } from 'chart.js';

// Register ChartJS components
ChartJS.register(...registerables);

const Dashboard = () => {
  const [stats, setStats] = useState({
    properties: 0,
    leads: 0,
    transactions: 0,
    recentProperties: [],
    propertyStatus: {}
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/dashboard');
        setStats(res.data);
      } catch (err) {
        toast.error('Failed to load dashboard data');
      }
    };

    fetchStats();
  }, []);

  const propertyStatusData = {
    labels: Object.keys(stats.propertyStatus),
    datasets: [
      {
        data: Object.values(stats.propertyStatus),
        backgroundColor: [
          '#4caf50', // Available - green
          '#ffc107', // Under Offer - yellow
          '#f44336'  // Sold - red
        ],
      }
    ]
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Properties</h3>
          <p className="text-3xl font-bold text-primary">{stats.properties}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Leads</h3>
          <p className="text-3xl font-bold text-secondary">{stats.leads}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Transactions</h3>
          <p className="text-3xl font-bold text-success">{stats.transactions}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Property Status</h3>
          <div className="h-64">
            <Pie 
              data={propertyStatusData} 
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Properties</h3>
          <div className="space-y-4">
            {stats.recentProperties.map(property => (
              <div key={property._id} className="border-b pb-2">
                <h4 className="font-medium">{property.address}</h4>
                <p className="text-sm text-gray-500">
                  {property.city}, {property.state} • ${property.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;