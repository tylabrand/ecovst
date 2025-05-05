import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;