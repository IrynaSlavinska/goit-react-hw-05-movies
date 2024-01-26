import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: rgb(113, 113, 218);
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Container = styled.div``;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 52px;
  margin-bottom: 20px;
`;

export const About = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 20px;
  width: 1000px;
  line-height: 1.5;
`;

export const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 6px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;

export const GenreItem = styled.li`
  color: #ffffff;
  font-size: 18px;
`;
