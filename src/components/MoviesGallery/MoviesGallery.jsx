import { Link } from 'react-router-dom';
import { List, Item, CoverImage, Title, Text } from 'pages/CommonStyles.styled';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const MoviesGallery = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`}>
              <CoverImage
                src={
                  poster_path ? `${baseImageURL}${poster_path}` : defaultImage
                }
                alt={title}
                width="250"
                height="350"
              />
              <Title>{title}</Title>
              <Text>Release date: {release_date}</Text>
              <Text>Rating: {vote_average.toFixed()}/10</Text>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesGallery;
