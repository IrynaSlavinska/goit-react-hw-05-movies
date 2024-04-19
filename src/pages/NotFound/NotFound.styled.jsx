import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import sadCat from 'assets/sad-cat.webp';
import defaultImage from 'assets/popcorn.jpg';
import errorTablet from 'assets/error.jpg';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  background-image: url(${defaultImage});
  max-width: 1380px;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  height: calc(100vh - 140px);

  @media screen and (min-width: 768px) {
    background-image: url(${errorTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${sadCat});
  }
`;

export const Title = styled.h1`
  color: var(--white);
`;

export const Text = styled.p`
  color: var(--white);
`;

export const StyledNav = styled(NavLink)`
  color: var(--yellow);
  font-size: 40px;
`;
