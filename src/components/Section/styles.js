import styled from 'styled-components';

export const SectionMain = styled.div`
  width: 100%;
`;

export const SectionInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const SectionDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const SectionNavigation = styled.div`
  width: calc(100% + 50px);
  margin-left: -25px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.borderSidenav};
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const SectionHeader = styled.div`
  width: calc(100% - 25px);
  padding: 3px 0px 3px 25px;
  border-radius: 0px 10px 10px 0px;
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  ${(props) => props.active && `
    background-color: ${props.theme.backgroundSidenavSecondary};
  `}
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.backgroundSidenavTertiary};
  }
  &:first-child {
    font-family: 'Lato Bold', sans-serif !important;
  }
`;

export const SectionInformation = styled.div`
  width: calc(100% - 280px);
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SectionInformationInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SectionInformationMain = styled.div`
  width: calc(100% - 220px);
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

export const SectionBody = styled.div`
  width: calc(100% + 50px);
  padding: 0px 25px;
  background-color: ${(props) => props.theme.backgroundInformationSecondary};
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.borderInformation};
  border-radius: 10px;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 800px) {
    margin-bottom: 0px;
    border: 0px;
    border-bottom: 2px solid ${(props) => props.theme.borderInformation};
    border-radius: 0px;
    box-shadow: none;
  }
  &:last-child {
    margin-bottom: -20px;
  }
`;

export const SectionText = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid ${(props) => props.theme.borderInformation};
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 20px;
  &:first-child {
    font-family: 'Lato Bold', sans-serif !important;
    font-size: 21px;
  }
  &:last-child {
    margin-bottom: 0px;
    border-bottom: 0px;
  }
`;

export const SectionTitle = styled.div`
  width: 100%;
  margin: 25px 0px 20px;
  line-height: 20px;
`;
