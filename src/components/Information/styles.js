import styled from 'styled-components';
import background from '../../assets/images/banner-background.svg';

export const InformationMain = styled.div`
  width: calc(100% - 250px);
  padding: 25px;
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
  background-image: url(${background});
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
  height: 1000px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderInformation};
  border-radius: 0px 0px 10px 10px;
  border-top: 0px;
  @media (max-width: 800px) {
    padding: 20px 25px;
  }
`;

export const InformationLocation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.textInformationTertiary};
  margin-bottom: 20px;
`;

export const InformationDirectory = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const InformationVersion = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const InformationTitle = styled.div`
  width: calc(100% + 4px);
  padding: 0px 1px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
`;
