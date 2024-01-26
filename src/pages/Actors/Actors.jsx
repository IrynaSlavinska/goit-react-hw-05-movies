import { useEffect, useState } from 'react';

import { getActors } from 'helpers/api';
import ActorsGallery from 'components/ActorsGallery/ActorsGallery';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors()
      .then(result => {
        setActors(result);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ActorsGallery actors={actors} />
    </>
  );
};

export default Actors;
