import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  padding: 20px;
  border: 1px solid var(--yellow);
  border-radius: 4px;
  box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;
`;

export const Author = styled.h3`
  color: var(--white);
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: var(--white);
`;
