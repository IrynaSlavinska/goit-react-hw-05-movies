import { getMovieReview } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReview(movieId).then(result => {
      setReviews(result.results);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>Not found</p>
      )}
    </ul>
  );
};

export default Reviews;
