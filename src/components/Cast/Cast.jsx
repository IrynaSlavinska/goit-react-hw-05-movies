import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastActors } from 'helpers/api';
import defaultImage from 'components/popcorn.jpg';
import { List, Card, Img, Text, TextCont } from './Cast.styled';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCastActors(movieId)
      .then(result => {
        console.log(result);
        setCast(result.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return cast.length !== 0 ? (
    <List>
      {cast.map(({ id, profile_path, character, name }) => (
        <Card key={id}>
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
      ))}
    </List>
  ) : (
    <p>Unknown</p>
  );
};

export default Cast;
