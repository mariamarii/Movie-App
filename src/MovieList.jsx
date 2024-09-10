import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './store/favActions';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function MovieList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM3YzNkZWE3MDI0YWMzNjcyNmM4YTUxOGIyNGY2NyIsIm5iZiI6MTcyNTg4MzQ3OC45MDQzNywic3ViIjoiNjZkZWUwZmQ4MDk4NjMzZGRmZWU2ZTg0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hpjmjbe7FaegObeUA5l5M4oSAiPTFEXr2dHSjZxHgwk'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie)); 
    } else {
      dispatch(addFavorite(movie)); 
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
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
              {isFavorite(movie.id) ? (
                <i className="bi bi-star-fill text-warning"></i> 
              ) : (
                <i className="bi bi-star"></i> 
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
