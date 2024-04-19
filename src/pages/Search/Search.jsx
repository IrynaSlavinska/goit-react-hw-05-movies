import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'helpers/api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Form, Input, Label, Button } from './Movies.styled';
import { CiSearch } from 'react-icons/ci';
import { IconContext } from 'react-icons';

const Search = () => {
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
      <Form onSubmit={submitHandler}>
        <Label>
          <Input type="text" placeholder="Enter movie name..." name="search" />
          <Button type="submit">
            <IconContext.Provider value={{ color: '#fafafa', size: 40 }}>
              <CiSearch />
            </IconContext.Provider>
          </Button>
        </Label>
      </Form>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Search;
