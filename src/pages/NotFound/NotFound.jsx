import { Title, Text, StyledNav, Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Text>You have gone to a non existing page</Text>
      <Text>Return to the</Text>
      <StyledNav to="/">Home</StyledNav>
    </Container>
  );
};

export default NotFound;
