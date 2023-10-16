import TrendingMovieList from 'components/TrendingMovieList';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchTrendingMovies();
        setMovies(moviesData.results);
      } catch (error) {
      } finally {
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <TrendingMovieList movies={movies} />
    </div>
  );
};

export default Home;
