import { Link, useLocation } from 'react-router-dom';
import {
  MoviesList,
  MovieCard,
  CoverImage,
  MovieTitle,
} from 'pages/Home/Home.styled';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const ActorsGallery = ({ actors }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {actors.map(({ id, profile_path, name }) => {
        return (
          <MovieCard key={id}>
            <Link to={`/actors/${id}`} state={{ from: location }}>
              <CoverImage
                src={
                  profile_path ? `${baseImageURL}${profile_path}` : defaultImage
                }
                alt={name}
                width="250"
                height="350"
              />
              <MovieTitle>{name}</MovieTitle>
            </Link>
          </MovieCard>
        );
      })}
    </MoviesList>
  );
};

export default ActorsGallery;
