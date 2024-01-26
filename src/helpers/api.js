import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd2aabebb930fa1a823002bbd5c0c00b2',
};

export const getMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const getMoviesByName = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`);
  return response.data;
};

export const getMoviesById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCastActors = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMovieReview = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};

export const getActors = async () => {
  const response = await axios.get('/person/popular');
  return response.data.results;
};
