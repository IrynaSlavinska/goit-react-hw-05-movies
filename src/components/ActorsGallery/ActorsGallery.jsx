import { Link, useLocation } from 'react-router-dom';
import { List, Item, CoverImage, Title } from 'pages/CommonStyles.styled';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const ActorsGallery = ({ actors }) => {
  const location = useLocation();

  return (
    <List>
      {actors.map(({ id, profile_path, name }) => {
        return (
          <Item key={id}>
            <Link to={`/actors/${id}`} state={{ from: location }}>
              <CoverImage
                src={
                  profile_path ? `${baseImageURL}${profile_path}` : defaultImage
                }
                alt={name}
                width="250"
                height="350"
              />
              <Title>{name}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default ActorsGallery;
