import Error from 'components/Error';
import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';
import { StyledReviews } from './Reviews.styled';

const MovieReviewsPage = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  const showReviews = Array.isArray(movieReviews) && movieReviews.length !== 0;
  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        setIsLoadingState(true);
        const movieData = await fetchMoviesReviews(movieId);
        setMovieReviews(movieData.results);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoadingState(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <StyledReviews>
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      {showReviews ? (
        movieReviews.map(reviews => (
          <li className="reviews-item" key={reviews.id}>
            <p>{reviews.created_at}</p>
            <p>{reviews.author}</p>
            <p>{reviews.content}</p>
          </li>
        ))
      ) : (
        <p>Sorry, we haven't got any reviews.</p>
      )}
    </StyledReviews>
  );
};

export default MovieReviewsPage;
