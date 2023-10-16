import React from 'react';
import { Link } from 'react-router-dom';

const TrendingMovieItem = ({ id, title, name }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title ?? name}</Link>
    </li>
  );
};

export default TrendingMovieItem;
