import Error from 'components/Error';
import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/api';
import { StyledCast } from './Cast.styled';

const MovieCreditsPage = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const showCredits = Array.isArray(movieCredits) && movieCredits.length;
  useEffect(() => {
    if (!movieId) return;
    const fetchCredits = async () => {
      try {
        setIsLoadingState(true);
        const movieData = await fetchMoviesCredits(movieId);
        setMovieCredits(movieData.cast);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoadingState(false);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <StyledCast>
      {isLoadingState && <Loader />}
      {errorState && <Error>{errorState}</Error>}
      {showCredits &&
        movieCredits.map(actor => {
          return (
            <li key={actor.id}>
              {actor.profile_path !== null ? (
                <img
                  className="image-actor"
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  className="image-cover"
                  src="https://www.ohiolink.edu/sites/default/files/default_images/profile-placeholder.png"
                  alt={actor.name}
                  width="200px"
                  height="300px"
                ></img>
              )}

              <p>{actor.name}</p>
            </li>
          );
        })}
    </StyledCast>
  );
};

export default MovieCreditsPage;
