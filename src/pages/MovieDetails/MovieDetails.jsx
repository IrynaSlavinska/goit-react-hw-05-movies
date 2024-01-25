import { Suspense, useEffect, useRef, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  StyledNav,
  MovieContainer,
  Container,
  Title,
  About,
  Genres,
  GenresList,
  GenreItem,
} from './MovieDetails.styled';

import { getMoviesById } from 'helpers/api';
import AnimatedLoader from 'components/Loader/Loader';
import defaultImage from 'components/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMoviesById(movieId)
      .then(result => {
        setMovie(result);
        setGenres(result.genres);
      })
      .catch(() => {
        navigate('/');
      });
  }, [movieId, navigate]);

  return (
    <>
      <StyledNav to={backLinkLocationRef.current}>Back to collection</StyledNav>

      <MovieContainer>
        <img
          src={
            movie.poster_path
              ? `${baseImageURL}${movie.poster_path}`
              : defaultImage
          }
          alt={movie.title}
          width="250"
          height="350"
        />

        <Container>
          <Title>{movie.title}</Title>
          <About>{movie.overview}</About>
          <Genres>Genres:</Genres>
          <GenresList>
            {genres.length !== 0 ? (
              genres.map(genre => (
                <GenreItem key={genre.id}>{genre.name}</GenreItem>
              ))
            ) : (
              <GenreItem>Unknown</GenreItem>
            )}
          </GenresList>
          <About>Release date: {movie.release_date}</About>
        </Container>
      </MovieContainer>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<AnimatedLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
