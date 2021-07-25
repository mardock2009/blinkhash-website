import styled from 'styled-components';

export const InformationContainer = styled.div`
  width: 100%;
  padding: 20px 25px;
  color: ${(props) => props.theme.textInformation};
  background-color: ${(props) => props.theme.backgroundInformation};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
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
  padding: 20px 25px;
  border: 1px solid ${(props) => props.theme.borderInformation};
  background-color: ${(props) => props.theme.backgroundInformationTertiary};
  background-position: center;
  border-radius: 10px;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
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
  border-radius: 0px 0px 10px 10px;
  border-top: 0px;
  @media (max-width: 800px) {
    margin-top: -20px;
    border-radius: 0px;
  }
`;
