import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMovieItem } from './MovieItem.styled';

const TrendingMovieItem = ({ id, title, name, state }) => {
  return (
    <StyledMovieItem>
      <Link state={state} className="link" to={`/movies/${id}`}>
        {title ?? name}
      </Link>
    </StyledMovieItem>
  );
};

export default TrendingMovieItem;
