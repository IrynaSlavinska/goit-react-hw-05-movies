import { Suspense, useEffect, useRef, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

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
      <Link to={backLinkLocationRef.current}>Back to collection</Link>

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
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Genres:</p>
      <ul>
        {genres.length !== 0 ? (
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)
        ) : (
          <li>Unknown</li>
        )}
      </ul>
      <p>Release date: {movie.release_date}</p>
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
