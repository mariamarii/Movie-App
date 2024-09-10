import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList'; 
import MovieDetail from './MovieDetail'; 
import NavBar from './NavBar'; 
import SignupForm from './SignUp';
import Login from './Login';
import Favorites from './Favorites';


function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        
        <Route path="/" element={<MovieList />} /> 
        <Route path="/movie/:id" element={<MovieDetail />} /> 
        <Route path="/Favorites" element={<Favorites />} /> 
        <Route path="/SignUp" element={<SignupForm />} /> 
        <Route path="/Login" element={<Login />} /> 

      </Routes>
    </Router>
  );
}

export default App;
