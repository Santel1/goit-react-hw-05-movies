import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMovieItem } from './MovieItem.styled';

const TrendingMovieItem = ({ id, title, name }) => {
  return (
    <StyledMovieItem>
      <Link className="link" to={`/movies/${id}`}>
        {title ?? name}
      </Link>
    </StyledMovieItem>
  );
};

export default TrendingMovieItem;
