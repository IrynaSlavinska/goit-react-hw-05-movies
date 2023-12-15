import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd2aabebb930fa1a823002bbd5c0c00b2';

function getMovies(query) {
  const response = axios.get(`${BASE_URL}?api_key=${API_KEY}&${query}`);
  return response.json;
}

export const App = () => {
  getMovies('cat').then(resp => console.log(resp));
  return <div>React homework template</div>;
};
