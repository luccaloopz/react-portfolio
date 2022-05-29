import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="react-portfolio">
      <Header /> {/*or is it <Navigation /> ? */}
      <Footer />
    </div>
  );
}

export default App;
