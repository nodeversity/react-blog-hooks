import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
