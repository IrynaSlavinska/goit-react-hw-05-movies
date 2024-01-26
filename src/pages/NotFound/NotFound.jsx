import { Title, Text, StyledNav, Container } from './NotFound.styled';
import { GiSadCrab } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const NotFound = () => {
  return (
    <Container>
      <IconContext.Provider value={{ color: 'rgb(113, 113, 218)', size: 250 }}>
        <GiSadCrab />
      </IconContext.Provider>
      <Title>404</Title>
      <Text>You have gone to a non existing page</Text>
      <Text>Return to the</Text>
      <StyledNav to="/">Home</StyledNav>
    </Container>
  );
};

export default NotFound;
