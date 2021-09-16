import styled from 'styled-components';

export const MissionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 40px 215px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundMission};
  background-image: url('/images/blinkhash-background-shapes-reversed.png');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 170px;
    margin-bottom: -60px;
  }
`;

export const MissionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MissionSection = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

export const MissionInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const MissionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const MissionTitleMain = styled.div`
  color: ${(props) => props.theme.textMission};
`;

export const MissionTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textMission};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const MissionText = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.textMission};
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
