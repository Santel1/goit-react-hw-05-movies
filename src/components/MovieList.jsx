import React from 'react';
import TrendingMovieItem from './MovieItem';
import { StyledMovieList } from './MovieList.styled';

const TrendingMovieList = ({ movies }) => {
  const showMovies = Array.isArray(movies) && movies.length;
  return (
    <StyledMovieList>
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
    </StyledMovieList>
  );
};

export default TrendingMovieList;
