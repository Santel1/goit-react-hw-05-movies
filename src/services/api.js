import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=71df0b6da8ea41057c3d4672e11500ec&language=en-US'
  );
  return data;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=71df0b6da8ea41057c3d4672e11500ec`
  );
  return data;
};

export const fetchMoviesCredits = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=71df0b6da8ea41057c3d4672e11500ec`
  );
  return data;
};

export const fetchMoviesReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=71df0b6da8ea41057c3d4672e11500ec`
  );
  return data;
};

export const fetchMoviesByName = async filmName => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${filmName}&include_adult=false&language=en-US&page=1&api_key=71df0b6da8ea41057c3d4672e11500ec`
  );
  return data;
};
