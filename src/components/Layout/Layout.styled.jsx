import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 60px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 10px 32px;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const NavItem = styled.li`
  font-size: 20px;
  color: #2c2c2c;
`;

export const StyledNav = styled(NavLink)`
  color: #ffffff;
  font-size: 24px;
  &:hover {
    color: rgb(113, 113, 218);
  }
`;

export const Main = styled.main`
  padding: 10px 32px;
`;
