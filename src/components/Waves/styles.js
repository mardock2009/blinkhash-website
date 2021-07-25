import styled from 'styled-components';

export const WavesContainer = styled.div`
  width: 100%;
`;

export const WavesPrimary = styled.div`
  width: calc(100% + 80px);
  height: 150px;
  margin-left: -40px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WavesSecondary = styled.div`
  width: calc(100% + 80px);
  height: 150px;
  margin-left: -40px;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(180deg);
`;
