import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import AuthCallback from './pages/AuthCallback/AuthCallback';

function App() {
  return (
    <>
      {/* Warning screen for desktop users */}
      <div 
        className="mobile-only-warning" 
        style={{
          display: 'none', 
          height: '100vh', 
          width: '100vw', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column',
          backgroundColor: '#121212',
          color: '#fbbf24'
        }}
      >
        <h1>Mobile Device Only</h1>
        <p style={{color: '#fff', marginTop: '10px'}}>Please access this app on a mobile device.</p>
      </div>

      {/* Main App Content */}
      <div className="app-content">
        <Router>
          <Routes>
            {/* Setting Settings as the default route for this demo */}
            <Route path="/" element={<Settings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;