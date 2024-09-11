import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function NavBar() {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Movie-App</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Popular Movies</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              <i className="bi bi-star-fill text-warning"></i> Favorites ({favorites.length})
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SignUp" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
