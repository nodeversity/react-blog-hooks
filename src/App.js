import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

//Import components to configure app's routing
import PostDetail from './components/blog/PostDetail'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/:postUrl" component={PostDetail} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
