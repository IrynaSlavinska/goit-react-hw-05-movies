import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px 32px;
  }
`;

export const Item = styled.li`
  background-color: rgb(50, 50, 87);
  display: flex;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px * 4) / 5);
  }
`;
