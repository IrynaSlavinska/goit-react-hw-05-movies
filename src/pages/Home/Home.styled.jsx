import styled from '@emotion/styled';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const MovieCard = styled.li`
  width: 250px;
  background-color: rgb(50, 50, 87);
  padding: 10px;
  transition: transform 0.3s linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const CoverImage = styled.img`
    width: 250px
    height: 350px
  `;

export const MovieTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
