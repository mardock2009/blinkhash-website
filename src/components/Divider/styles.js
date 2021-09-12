import styled from 'styled-components';

export const DividerLightPrimary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerLightPrimary} 50%,
    ${(props) => props.theme.backgroundDividerLightPrimary});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 50px;
  }
`;

export const DividerLightSecondary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerLightSecondary} 50%,
    ${(props) => props.theme.backgroundDividerLightSecondary});
  margin-top: -100px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 50px;
    margin-top: -50px;
  }
`;

export const DividerDarkPrimary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerDarkPrimary} 50%,
    ${(props) => props.theme.backgroundDividerDarkPrimary});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 50px;
  }
`;

export const DividerDarkSecondary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerDarkSecondary} 50%,
    ${(props) => props.theme.backgroundDividerDarkSecondary});
  margin-top: -100px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 50px;
    margin-top: -50px;
  }
`;

export const DividerGreyPrimary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerGreyPrimary} 50%,
    ${(props) => props.theme.backgroundDividerGreyPrimary});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 50px;
  }
`;

export const DividerGreySecondary = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerGreySecondary} 50%,
    ${(props) => props.theme.backgroundDividerGreySecondary});
  margin-top: -100px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 50px;
    margin-top: -50px;
  }
`;
