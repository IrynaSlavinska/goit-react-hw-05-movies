import { useEffect, useState } from 'react';

import { getMovies } from 'helpers/api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(result => {
        setPopularMovies(result);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <MoviesGallery movies={popularMovies} />
    </>
  );
};

export default Home;
