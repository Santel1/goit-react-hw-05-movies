import React, { useEffect, useState } from 'react';
import { ReactComponent as IconSearch } from 'images/searchBtn.svg';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/api';
import MovieList from 'components/MovieList';
import { Loader } from 'components/Loader';
import Error from 'components/Error';
import { StyledMovies } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovie = async () => {
      try {
        setIsLoadingState(true);
        const movieData = await fetchMoviesByName(query);
        setMovie(movieData);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoadingState(false);
      }
    };
    fetchMovie();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <StyledMovies>
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      <form className="form" onSubmit={handleFormSubmit}>
        <input className="input" type="text" name="searchMovieByName" />
        <button className="input-btn" type="submit">
          <IconSearch className="svg" />
        </button>
      </form>

      <section>
        {movie !== null && (
          <MovieList state={{ from: location }} movies={movie.results} />
        )}
      </section>
    </StyledMovies>
  );
};

export default Movies;
