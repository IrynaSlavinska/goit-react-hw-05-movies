import { useEffect, useState } from 'react';

import { getMovies } from 'helpers/api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { PopularTitle } from 'pages/Home/Home.styled';

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
      <PopularTitle>Popular movies</PopularTitle>
      <MoviesGallery movies={popularMovies} />
    </>
  );
};

export default Home;
