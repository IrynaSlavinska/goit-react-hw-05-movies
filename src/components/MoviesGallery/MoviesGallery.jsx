import { Link } from 'react-router-dom';
import {
  MoviesList,
  MovieCard,
  CoverImage,
  MovieTitle,
} from 'pages/Home/Home.styled';
import defaultImage from 'components/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const MoviesGallery = ({ movies }) => {
  return (
    <MoviesList>
      {movies.map(movie => {
        return (
          <MovieCard key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              {/* <CoverImage
                src={defaultImage}
                alt={movie.title}
                width="250"
                height="350"
              /> */}

              <CoverImage
                src={`${baseImageURL}${movie.poster_path}`}
                alt={movie.title}
                width="250"
                height="350"
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </Link>
          </MovieCard>
        );
      })}
    </MoviesList>
  );
};

export default MoviesGallery;
