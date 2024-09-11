import React, { useState, useEffect } from 'react';
import axiosInstance from './store/axiosInstance';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, fetchMovies, removeFavorite } from './store/favActions';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function MovieList() {

  const dispatch = useDispatch();
  const{ favorites,movies} = useSelector((state) => state.favorites);
 

  useEffect(() => {
    dispatch(fetchMovies('/movie/popular'));
  }, [dispatch]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
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
            <span onClick={() => handleFavoriteClick(movie)} role="button">
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
