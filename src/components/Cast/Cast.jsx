import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieCastActors } from 'helpers/api';
import { List, Item, CoverImage, Title } from 'pages/CommonStyles.styled';
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
        <Item key={id}>
          <Link to={`/actors/${id}`}>
            <CoverImage
              src={profile_path ? `${baseUrl}${profile_path}` : defaultImage}
              alt={name}
              width="250"
              height="350"
            />
            <Title>
              Character: <span>{character}</span>
            </Title>
            <Title>
              Actor: <span>{name}</span>
            </Title>
          </Link>
        </Item>
      ))}
    </List>
  ) : (
    <p>Unknown</p>
  );
};

export default Cast;
