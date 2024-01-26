import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getActorById } from 'helpers/api';
import AnimatedLoader from 'components/Loader/Loader';
import defaultImage from 'components/popcorn.jpg';

import {
  StyledNav,
  ActorCard,
  ActorData,
  Name,
  Info,
  Text,
  List,
} from './ActorDetails.styled';

const baseImageURL = 'https://image.tmdb.org/t/p/w300/';

const ActorDetails = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <StyledNav to={backLinkLocationRef.current}>Back to collection</StyledNav>
      <ActorCard>
        <img
          src={
            actor.profile_path
              ? `${baseImageURL}${actor.profile_path}`
              : defaultImage
          }
          alt={actor.name}
        />
        <ActorData>
          <Name>{actor.name}</Name>
          <Info>Birthday:</Info>
          <Text>{actor.birthday}</Text>
          <Info>Place of birth:</Info>
          <Text>{actor.place_of_birth}</Text>
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
