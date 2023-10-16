import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=71df0b6da8ea41057c3d4672e11500ec&language=en-US'
  );
  return data;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=71df0b6da8ea41057c3d4672e11500ec`
  );
  return data;
};

// https://api.themoviedb.org/3/trending/all/day?api_key=71df0b6da8ea41057c3d4672e11500ec&language=en-US

//'https://api.themoviedb.org/3/movie/157336?api_key=71df0b6da8ea41057c3d4672e11500ec'
