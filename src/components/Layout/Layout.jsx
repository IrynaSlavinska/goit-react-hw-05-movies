import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Navigation,
  NavItem,
  StyledNav,
  Main,
} from './Layout.styled';
import AnimatedLoader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavItem>
            <StyledNav to="/">Home</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/movies">Movies</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/actors">Actors</StyledNav>
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
