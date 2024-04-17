import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import {
  StyledNav,
  MovieContainer,
  CoverImage,
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
  const navigate = useNavigate();

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

  const backgroundUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const backgroundSrc = movie.backdrop_path && backgroundUrl;

  return (
    <>
      <MovieContainer background={backgroundSrc}>
        <CoverImage
          src={
            movie.poster_path
              ? `${baseImageURL}${movie.poster_path}`
              : defaultImage
          }
          alt={movie.title}
          width="250"
          height="350"
        />

        <div>
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
        </div>
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
