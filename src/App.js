import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My Auth App</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Please choose a page: <a href="/signup">Sign Up</a> | <a href="/login">Login</a></h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;