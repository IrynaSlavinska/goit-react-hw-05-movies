import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastActors } from 'helpers/api';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCastActors(movieId)
      .then(result => {
        setCast(result.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return cast.length !== 0 ? (
    <ul>
      {cast.map(({ id, profile_path, character, name }) => (
        <li key={id}>
          <img src={`${baseUrl}${profile_path}`} alt={name} />
          <p>
            Character: <span>{character}</span>
          </p>
          <p>
            Actor: <span>{name}</span>
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Unknown</p>
  );
};

export default Cast;
