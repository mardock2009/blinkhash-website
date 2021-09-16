import styled from 'styled-components';

export const DividerLightPrimary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerLight} 50%,
    ${(props) => props.theme.backgroundDividerLight});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 60px;
  }
`;

export const DividerLightSecondary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerLight2} 50%,
    ${(props) => props.theme.backgroundDividerLight2});
  margin-top: -120px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 60px;
    margin-top: -60px;
  }
`;

export const DividerDarkPrimary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerDark} 50%,
    ${(props) => props.theme.backgroundDividerDark});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 60px;
  }
`;

export const DividerDarkSecondary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerDark2} 50%,
    ${(props) => props.theme.backgroundDividerDark2});
  margin-top: -120px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 60px;
    margin-top: -60px;
  }
`;

export const DividerGreyPrimary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerGrey} 50%,
    ${(props) => props.theme.backgroundDividerGrey});
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 1;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 0;
  `}
  @media (max-width: 800px) {
    height: 60px;
  }
`;

export const DividerGreySecondary = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(to bottom left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.theme.backgroundDividerGrey2} 50%,
    ${(props) => props.theme.backgroundDividerGrey2});
  margin-top: -120px;
  margin-bottom: -1px;
  position: relative;
  z-index: 998;
  opacity: 0;
  transition: 0.22s ease-in all;
  ${(props) => props.theme.type === 'dark' && `
    opacity: 1;
  `}
  @media (max-width: 800px) {
    height: 60px;
    margin-top: -60px;
  }
`;
