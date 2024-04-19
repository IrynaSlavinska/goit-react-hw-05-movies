import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Card = styled.li`
  background-color: rgb(50, 50, 87);
  width: 200px;
  height: 320px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 170px;
  height: 240px;
  margin-bottom: 12px;
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: var(--white);
`;
