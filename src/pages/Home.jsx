import Error from 'components/Error';
import { Loader } from 'components/Loader';
import MovieList from 'components/MovieList';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { StyledHome } from './Home.styled';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoadingState(true);
        const moviesData = await fetchTrendingMovies();
        setMovies(moviesData.results);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoadingState(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <StyledHome>
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      <MovieList state={{ from: location }} movies={movies} />
    </StyledHome>
  );
};

export default Home;
