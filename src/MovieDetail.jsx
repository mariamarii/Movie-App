import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';
import { useDispatch } from 'react-redux';
import axiosInstance from './store/axiosInstance';

function MovieDetail() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}`);
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
