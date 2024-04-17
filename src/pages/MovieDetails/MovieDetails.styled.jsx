import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

//   @media screen and (min-width: 375px) {
//     max-width: 375px;
//   }

//   @media screen and (min-width: 768px) {
//     gap: 32px;
//   }

//   @media screen and (min-width: 1440px) {
//     max-width: 1408px;
//   }

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

// export const MovieContainer = styled.div`
//   display: flex;
//   gap: 60px;
//   align-items: center;
//   margin-bottom: 20px;
//   padding: 50px;
//   background-color: var(--yellow);
//   background-image: url(${props => props.background});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 60px; */
  align-items: center;
  margin-bottom: 20px;
  /* padding: 50px; */
  padding: 20px;
  background-color: var(--yellow);
  position: relative;
  background-image: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0) 0%,
      rgba(17, 17, 17, 0.4) 100%
    ),
    url(${props => props.background});
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
    filter: blur(16px);
    z-index: -1;
  }
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
