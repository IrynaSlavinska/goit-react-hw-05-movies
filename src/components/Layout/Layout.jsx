import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Navigation, NavItem, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movies">Movies</NavLink>
          </NavItem>
        </Navigation>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
