import styled from '@emotion/styled';

//   @media screen and (min-width: 375px) {
//     max-width: 375px;
//   }

//   @media screen and (min-width: 768px) {
//     gap: 32px;
//   }

//   @media screen and (min-width: 1440px) {
//     max-width: 1408px;
//   }

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
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  transition: transform var(--transition), background-color var(--transition),
    color var(--transition);

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px * 4) / 5);
    &:hover,
    &:focus {
      transform: scale(1.05);
      background-color: var(--yellow);
      & h3,
      & p {
        color: #130a2e;
      }
    }
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
`;

export const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  color: var(--white);
  margin-bottom: 8px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Rating = styled.p`
  position: absolute;
  content: '';
  top: -10px;
  right: -10px;
  background-color: var(--yellow);
  box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;
  padding: 16px;
  color: var(--background);
  border-radius: 50%;
`;

export const Text = styled.p`
  color: var(--white);
  text-align: center;
`;
