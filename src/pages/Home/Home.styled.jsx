import styled from '@emotion/styled';

export const PopularTitle = styled.h1`
  text-align: center;
  margin-bottom: 12px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
`;

export const MovieCard = styled.li`
  width: 250px;
  border-radius: 16px;
  background-color: rgb(149, 219, 237);
  padding: 8px;
`;

export const CoverImage = styled.img`
    width: 250px
    height: 350px
  `;

export const MovieTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  text-align: center;
`;
