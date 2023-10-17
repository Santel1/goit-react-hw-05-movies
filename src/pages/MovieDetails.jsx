import Error from 'components/Error';
import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect, useState, Suspense, lazy } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import {
  StyledMovieContainer,
  StyledMovieDetails,
} from './MovieDetails.styled';
import { useRef } from 'react';

const MovieCreditsPage = lazy(() => import('pages/Cast'));
const MovieReviewsPage = lazy(() => import('pages/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
    <StyledMovieContainer>
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      <Link className="back-link" to={backLinkHref.current}>
        Go back
      </Link>
      {movieDetails !== null && (
        <StyledMovieDetails>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width={350}
            alt="poster"
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
    </StyledMovieContainer>
  );
};

export default MovieDetails;
