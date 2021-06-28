import styled from 'styled-components';

export const InformationMain = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px 25px;
  color: ${(props) => props.theme.textInformation};
  background-color: ${(props) => props.theme.backgroundInformation};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0px;
  }
`;

export const InformationInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 800px) {
    border-radius: 0px;
  }
`;

export const InformationSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.backgroundInformationSecondary};
  background-color: ${(props) => props.theme.backgroundInformationSecondary};
  background-position: center;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    border-radius: 0px;
  }
`;

export const InformationText = styled.div`
  text-align: center;
  margin-right: 20px;
  color: ${(props) => props.theme.textInformationSecondary};
  @media (max-width: 1000px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

export const InformationDocumentation = styled.div`
  width: 100%;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderInformation};
  border-radius: 0px 0px 10px 10px;
  border-top: 0px;
  @media (max-width: 800px) {
    border: 0px;
    border-radius: 0px;
  }
`;

export const InformationLocation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.textInformationTertiary};
  margin-bottom: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const InformationDirectory = styled.div`
  display: flex;
`;

export const InformationVersion = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InformationTitle = styled.div`
  width: calc(100%);
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 3px solid ${(props) => props.theme.borderInformation};
`;
