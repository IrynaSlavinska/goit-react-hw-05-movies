import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieCastActors } from 'helpers/api';
import { List, Card, Img, Text, TextCont } from './Cast.styled';
import defaultImage from 'assets/popcorn.jpg';

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
    <List>
      {cast.map(({ id, profile_path, character, name }) => (
        <Link key={id} to={`/actors/${id}`}>
          <Card>
            <Img
              src={profile_path ? `${baseUrl}${profile_path}` : defaultImage}
              alt={name}
              width="150"
              height="250"
            />
            <TextCont>
              <Text>
                Character: <span>{character}</span>
              </Text>
              <Text>
                Actor: <span>{name}</span>
              </Text>
            </TextCont>
          </Card>
        </Link>
      ))}
    </List>
  ) : (
    <p>Unknown</p>
  );
};

export default Cast;
