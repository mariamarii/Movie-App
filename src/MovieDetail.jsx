import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetail() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM3YzNkZWE3MDI0YWMzNjcyNmM4YTUxOGIyNGY2NyIsIm5iZiI6MTcyNTg4MzQ3OC45MDQzNywic3ViIjoiNjZkZWUwZmQ4MDk4NjMzZGRmZWU2ZTg0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hpjmjbe7FaegObeUA5l5M4oSAiPTFEXr2dHSjZxHgwk'
          },
        });
        setMovie(response.data); 
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError('Failed to fetch movie details.');
      }
    };

    if (id) {
      fetchMovieDetails(); 
    }
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movie) {
    return <div className="loading">Loading movie details...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1 className="movie-title">{movie.title}</h1>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-release-date">Release Date: {movie.release_date}</p>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
