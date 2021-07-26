import styled from 'styled-components';

export const DividerContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

export const DividerPrimary = styled.div`
  width: 100vw;
  height: 20vh;
  max-height: 200px;
  margin-bottom: -1px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DividerSecondary = styled.div`
  width: 100vw;
  height: 20vh;
  max-height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(180deg);
`;
