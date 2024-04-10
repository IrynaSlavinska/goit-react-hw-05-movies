import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  StyledNav,
  MovieContainer,
  Container,
  Title,
  About,
  Subtitle,
  List,
  GenreItem,
  CompanyLogo,
} from './MovieDetails.styled';

import { getMoviesById } from 'helpers/api';
import AnimatedLoader from 'components/Loader/Loader';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [company, setCompany] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMoviesById(movieId)
      .then(result => {
        setMovie(result);
        setGenres(result.genres);
        setCompany(result.production_companies[0]);
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
          <Subtitle>Genres:</Subtitle>
          <List>
            {genres.length !== 0 ? (
              genres.map(genre => (
                <GenreItem key={genre.id}>{genre.name}</GenreItem>
              ))
            ) : (
              <GenreItem>Unknown</GenreItem>
            )}
          </List>
          <Subtitle>Release date:</Subtitle>
          <About>{movie.release_date}</About>
          <Subtitle>Production company:</Subtitle>

          <CompanyLogo
            src={`${baseImageURL}${company.logo_path}`}
            alt={company.name}
            width={100}
          />
        </Container>
      </MovieContainer>
      <List>
        <li>
          <StyledNav to="cast">Cast</StyledNav>
        </li>
        <li>
          <StyledNav to="reviews">Reviews</StyledNav>
        </li>
      </List>
      <Suspense fallback={<AnimatedLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
