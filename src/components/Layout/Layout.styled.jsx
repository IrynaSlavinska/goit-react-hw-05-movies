import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 10px 16px;
  margin: 0 auto;
  border-bottom: 1px solid var(--yellow);

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1408px;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 375px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const NavItem = styled.li`
  font-size: 20px;
  color: #2c2c2c;
`;

export const StyledNav = styled(NavLink)`
  color: #ffffff;
  font-size: 24px;
  transition: color var(--transition);
  &:hover,
  &:focus {
    color: var(--yellow);
  }
  &.active {
    color: var(--yellow);
    border: 1px solid var(--yellow);
    border-radius: 4px;
    box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;
    padding: 4px 12px;
  }
`;

export const Main = styled.main``;

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
    padding: 32px 20px;
  }
`;
