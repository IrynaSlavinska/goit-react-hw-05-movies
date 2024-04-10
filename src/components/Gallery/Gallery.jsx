import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorGallery } from 'helpers/api';
import { List, Item } from './Gallery.styled';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const Gallery = () => {
  const { actorId } = useParams();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getActorGallery(actorId).then(result => {
      setGallery(result.profiles);
    });
  }, [actorId]);

  return (
    <List>
      {gallery.map(item => {
        return (
          <Item key={item.file_path}>
            <img
              src={
                item.file_path
                  ? `${baseImageURL}${item.file_path}`
                  : defaultImage
              }
              alt={item.vote_average}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default Gallery;
