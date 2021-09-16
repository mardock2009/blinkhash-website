import styled from 'styled-components';

export const CommunityContainer = styled.div`
  width: 100%;
  max-height: 450px;
  display: flex;
  justify-content: center;
  padding: 40px 40px 155px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundCommunity};
  overflow: hidden;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 95px;
    margin-bottom: -60px;
    max-height: none;
  }
`;

export const CommunityInner = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommunityImage = styled.img`
  width: calc(100% - 100px);
  max-width: 800px;
  margin-left: -400px;
  margin-top: 450px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const CommunitySection = styled.div`
  width: 500px;
  @media (max-width: 800px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const CommunityTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-start;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const CommunityTitleMain = styled.div`
  color: ${(props) => props.theme.textCommunity};
`;

export const CommunityTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textCommunity};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const CommunityText = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  color: ${(props) => props.theme.textCommunity};
  justify-content: flex-start;
  @media (max-width: 800px) {
    text-align: center;
    justify-content: center;
  }
`;

export const CommunityCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
