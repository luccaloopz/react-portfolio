import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="react-portfolio"  style={{backgroundColor: "#ECE5C7", minHeight: '100vh', height: '100%'}}>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
