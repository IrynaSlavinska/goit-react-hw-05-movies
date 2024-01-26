import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  color: #ffffff;
`;

export const Text = styled.p`
  color: #ffffff;
`;

export const StyledNav = styled(NavLink)`
  color: rgb(113, 113, 218);
  font-size: 40px;
`;
