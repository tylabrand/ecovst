import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;