import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'helpers/api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    if (!search) return;
    getMoviesByName(search).then(result => {
      setMovies(result.results);
    });
  }, [searchParams]);

  const submitHandler = e => {
    e.preventDefault();

    const movieValue = e.target.search.value.trim().toLowerCase();
    setSearchParams({ search: movieValue === '' ? {} : movieValue });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <input type="text" placeholder="Enter movie name..." name="search" />
          <button type="submit">search</button>
        </label>
      </form>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Movies;
