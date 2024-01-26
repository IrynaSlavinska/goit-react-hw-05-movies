import { getMovieReview } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Title, Text } from './Revies.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReview(movieId).then(result => {
      setReviews(result.results);
    });
  }, [movieId]);

  return (
    <List>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </Item>
          );
        })
      ) : (
        <p>Not found</p>
      )}
    </List>
  );
};

export default Reviews;
