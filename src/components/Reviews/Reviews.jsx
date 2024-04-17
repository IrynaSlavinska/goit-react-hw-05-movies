import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'helpers/api';
import { List, Item, Author, Text } from './Revies.styled';

// const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     getMovieReview(movieId).then(result => {
//       setReviews(result.results);
//     });
//   }, [movieId]);

//   return (
//     <List>
//       {reviews.length !== 0 ? (
//         reviews.map(({ id, author, content }) => {
//           return (
//             <Item key={id}>
//               <Title>{author}</Title>
//               <Text>{content}</Text>
//             </Item>
//           );
//         })
//       ) : (
//         <p>Not found</p>
//       )}
//     </List>
//   );
// };

// export default Reviews;

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    getMovieReview(movieId).then(result => {
      setReviews(result.results);
    });
  }, [movieId]);

  const handleToggleExpand = reviewId => {
    setExpandedReviews(prevState => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }));
  };

  return (
    <List>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          const isExpanded = expandedReviews[id] || false;
          return (
            <Item key={id}>
              <Author>{author}</Author>
              <Text>
                {isExpanded ? content : `${content.substring(0, 100)}...`}
                {content.length > 100 && (
                  <button type="button" onClick={() => handleToggleExpand(id)}>
                    {isExpanded ? 'Показати менше' : 'Показати більше'}
                  </button>
                )}
              </Text>
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
