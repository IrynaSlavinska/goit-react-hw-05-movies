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
      console.log(result.results);
      setMovies(result.results);
    });
  }, [searchParams]);

  const submitHandler = e => {
    e.preventDefault();
  };

  const updateQueryString = evt => {
    const movieValue = evt.target.value.trim().toLowerCase();

    if (movieValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ search: movieValue });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            placeholder="Enter movie name..."
            onChange={updateQueryString}
            name="search"
          />
          <button type="submit">search</button>
        </label>
      </form>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Movies;
