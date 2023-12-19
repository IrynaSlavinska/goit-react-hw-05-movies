import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Navigation, NavItem, Main } from './Layout.styled';
import AnimatedLoader from 'components/Loader/Loader';

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
        <Suspense fallback={<AnimatedLoader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
