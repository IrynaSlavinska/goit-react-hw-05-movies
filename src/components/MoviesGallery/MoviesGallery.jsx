import { Link, useLocation } from 'react-router-dom';
import {
  MoviesList,
  MovieCard,
  CoverImage,
  MovieTitle,
} from 'pages/Home/Home.styled';
import defaultImage from 'components/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <MovieCard key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <CoverImage
                src={`${baseImageURL}${poster_path}`}
                alt={title}
                width="250"
                height="350"
              />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MovieCard>
        );
      })}
    </MoviesList>
  );
};

export default MoviesGallery;
