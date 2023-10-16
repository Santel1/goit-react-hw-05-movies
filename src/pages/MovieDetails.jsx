import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        const movieData = await fetchMoviesById(movieId);
        setMovieDetails(movieData);
        // const genreNamess = movieDetails.genres.map(genre => genre.name);
        // console.log(genreNamess);
      } catch (error) {
      } finally {
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const RenderGenres = () => {
    if (movieDetails && movieDetails.genres) {
      return movieDetails.genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ));
    }
    return null;
  };

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt=""
          />
          <h1>{movieDetails.title ?? movieDetails.name}</h1>
          <p>Rating:{movieDetails.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            <RenderGenres />
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
