import React from 'react';
import TrendingMovieItem from './TrendingMovieItem';

const TrendingMovieList = ({ movies }) => {
  const showMovies = Array.isArray(movies) && movies.length;
  return (
    <ul>
      {showMovies &&
        movies.map(movie => {
          return (
            <TrendingMovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              name={movie.name}
            />
          );
        })}
    </ul>
  );
};

export default TrendingMovieList;
