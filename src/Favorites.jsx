import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from './store/favActions'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (movie) => {
    dispatch(removeFavorite(movie)); 
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
             <li className="movieItem " key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
              
              <span
                onClick={() => handleFavoriteClick(movie)}
                role="button"
              >
                <i className="bi bi-star-fill text-warning"></i> 
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
