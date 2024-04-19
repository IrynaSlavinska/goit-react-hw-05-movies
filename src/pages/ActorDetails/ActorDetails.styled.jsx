import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  color: var(--white);
  font-size: 20px;
  &:hover {
    color: var(--yellow);
  }
  &.active {
    color: var(--yellow);
  }
`;

export const ActorCard = styled.div`
  border: 1px solid var(--yellow);
  border-radius: 4px;
  box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;
  margin-bottom: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const ActorData = styled.div``;

export const Name = styled.h2`
  color: var(--yellow);
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Info = styled.h3`
  color: var(--yellow);
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: var(--white);
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;
