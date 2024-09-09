import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_ACCESS_TOKEN'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(response => {
        setMovies(response.data.results); // Store the movies in the state
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
