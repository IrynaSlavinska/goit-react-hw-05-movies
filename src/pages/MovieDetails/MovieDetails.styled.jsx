import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: var(--yellow);
  }
  &.active {
    color: var(--yellow);
  }
`;

export const MovieContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--yellow);
  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(16px);
    z-index: -1;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px;
    flex-direction: row;
    gap: 40px;
  }
`;

export const CoverImage = styled.img`
  width: auto;
  height: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 52px;
  margin-bottom: 20px;
`;

export const About = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 20px;
  max-width: 1000px;
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

export const CompanyLogo = styled.img`
  background-color: #ffffff;
  padding: 10px;
`;
