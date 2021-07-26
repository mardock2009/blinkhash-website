import styled from 'styled-components';

export const BuildingContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  @media (max-width: 1024px) {
    margin-top: 60px;
  }
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

export const BuildingOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
