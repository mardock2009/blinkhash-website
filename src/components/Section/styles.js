import styled from 'styled-components';

export const SectionMain = styled.div`
  width: 100%;
  transition: 0.2s ease-in all;
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
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderSidenav};
  &:last-child {
    border-bottom: 0px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionBody = styled.div`
  width: calc(100% + 50px);
  padding: 0px 25px;
  border-bottom: 3px solid ${(props) => props.theme.borderInformation};
  &:last-child {
    margin-bottom: -1rem;
    border-radius: 0px;
    border-bottom: 0px;
    box-shadow: none;
  }
`;

export const SectionText = styled.div`
  padding-bottom: 8px;
  border-bottom: 2px solid ${(props) => props.theme.borderInformation};
  &:last-child {
    margin-bottom: 0px;
    border-bottom: 0px;
  }
`;

export const SectionTitle = styled.div`
  width: 100%;
  margin: 20px 0px 15px;
`;
