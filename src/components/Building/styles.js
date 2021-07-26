import styled from 'styled-components';

export const BuildingContainer = styled.div`
  width: 100%;
  margin: 100px 0px 95px;
  @media (max-width: 1024px) {
    margin: 60px 0px 75px;
  }
  @media (max-width: 800px) {
    margin: 40px 0px 55px;
  }
`;

export const BuildingOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
