import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: rgb(113, 113, 218);
  }
`;
export const ActorCard = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const ActorData = styled.div``;

export const Name = styled.h2`
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 32px;
`;

export const Info = styled.h3`
  color: #ffffff;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;
