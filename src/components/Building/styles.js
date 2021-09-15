import styled from 'styled-components';

export const BuildingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 40px 170px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundBuilding};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 110px;
    margin-bottom: -60px;
  }
`;

export const BuildingInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BuildingSection = styled.div`
  max-width: 960px;
  margin-bottom: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    max-width: 650px;
    flex-direction: column;
    &:first-child {
      margin-bottom: 50px;
    }
  }
  &:last-child {
    margin-bottom: 0px;
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }
`;

export const BuildingImage = styled.img`
  width: 400px;
  @media (max-width: 1024px) {
    width: 350px;
    margin-bottom: 40px;
    padding: 0px !important;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const BuildingInformation = styled.div`
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    align-items: center;
  }
`;

export const BuildingTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const BuildingTitleMain = styled.div`
  color: ${(props) => props.theme.textModule};
`;

export const BuildingTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textModule};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const BuildingText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textModule};
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const BuildingLink = styled.div`
  max-width: 200px;
`;
