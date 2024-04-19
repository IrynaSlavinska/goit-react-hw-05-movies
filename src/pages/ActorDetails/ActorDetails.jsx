import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { getActorById } from 'helpers/api';
import AnimatedLoader from 'components/Loader/Loader';
import {
  StyledNav,
  ActorCard,
  ActorData,
  Name,
  Info,
  Text,
  List,
} from './ActorDetails.styled';
import defaultImage from 'assets/popcorn.jpg';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const ActorDetails = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getActorById(actorId)
      .then(result => {
        setActor(result);
      })
      .catch(() => {
        navigate('/');
      });
  }, [actorId, navigate]);

  return (
    <>
      <ActorCard>
        <img
          src={
            actor.profile_path
              ? `${baseImageURL}${actor.profile_path}`
              : defaultImage
          }
          alt={actor.name}
          width="250"
          height="350"
        />
        <ActorData>
          <Name>{actor.name}</Name>
          <Info>Birthday:</Info>
          <Text>{actor.birthday}</Text>
          <Info>Place of birth:</Info>
          <Text>{actor.place_of_birth}</Text>
          <Info>Biography:</Info>
          <Text>{actor.biography}</Text>
        </ActorData>
      </ActorCard>
      <List>
        <li>
          <StyledNav to="films">Filmography</StyledNav>
        </li>
        <li>
          <StyledNav to="gallery">Gallery</StyledNav>
        </li>
      </List>
      <Suspense fallback={<AnimatedLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ActorDetails;
