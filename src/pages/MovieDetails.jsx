import Error from 'components/Error';
import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect, useState, Suspense, lazy } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import { StyledMovieDetails } from './MovieDetails.styled';

const MovieCreditsPage = lazy(() => import('pages/Cast'));
const MovieReviewsPage = lazy(() => import('pages/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        setIsLoadingState(true);
        const movieData = await fetchMoviesById(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoadingState(false);
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
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      {movieDetails !== null && (
        <StyledMovieDetails>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt=""
          />
          <h1>{movieDetails.title ?? movieDetails.name}</h1>
          <p>Rating: {movieDetails.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul className="genres-list">
            <RenderGenres />
          </ul>

          <ul className="movie-descriptions">
            <li>
              <NavLink className="link" to="credits">
                Credits
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="credits" element={<MovieCreditsPage />} />
              <Route path="reviews" element={<MovieReviewsPage />} />
            </Routes>
          </Suspense>
        </StyledMovieDetails>
      )}
    </div>
  );
};

export default MovieDetails;
