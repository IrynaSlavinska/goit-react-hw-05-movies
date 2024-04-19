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
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: var(--white);
`;

export const ToggleButton = styled.button`
  padding: 4px 12px;
  margin-left: 8px;
  font-size: 18px;
  color: var(--yellow);
  border: 1px solid var(--yellow);
  border-radius: 4px;
  box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;
`;
