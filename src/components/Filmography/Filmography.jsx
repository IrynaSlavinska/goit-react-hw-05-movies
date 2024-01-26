import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorFilms } from 'helpers/api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Filmography = () => {
  const { actorId } = useParams();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getActorFilms(actorId)
      .then(result => setFilms(result.cast))
      .catch(err => console.log(err));
  }, [actorId]);

  return <MoviesGallery movies={films} />;
};

export default Filmography;
