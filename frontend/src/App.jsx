import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-dark-300 to-dark-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          <h2 className="mt-4 text-2xl font-bold text-white">DisasterSense</h2>
          <p className="mt-2 text-gray-400">Initializing Intelligence Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;