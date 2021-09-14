import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  padding: 20px 25px;
  top: 0px;
  left: 0px;
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.borderHeader};
  background-color: ${(props) => props.theme.backgroundHeader};
  transition: 0.2s ease-in all;
`;

export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  margin-top: 1px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.textHeader};
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const HeaderPages = styled.div`
  height: 35px;
  display: flex;
  margin-top: 2px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderText = styled.div `
  color: ${(props) => props.theme.textHeader};
  margin: 5px 12.5px;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accessoryHover};
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const HeaderSocial = styled.div`
  height: 35px;
  display: flex;
  padding: 0px 25px;
  margin: 0px 25px;
  border-left: 1px solid ${(props) => props.theme.borderHeader};
  border-right: 1px solid ${(props) => props.theme.borderHeader};
  @media (max-width: 800px) {
    padding: 0px;
    border-left: 0px;
  }
  @media (max-width: 600px) {
    border-right: 0px;
  }
`;

export const HeaderSocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  color: ${(props) => props.theme.textHeader};
  cursor: pointer;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    display: none;
  }
  &:hover {
    color: ${(props) => props.theme.accessoryHover};
  }
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const Discord = styled.div`
  width: 15px;
  height: 11px;
  background-size: cover;
  background-image: url('/docs/images/discord-logo.png');
`;

export const Medium = styled.div`
  width: 15px;
  height: 12px;
  background-size: cover;
  background-image: url('/docs/images/medium-logo.png');
`;

export const Github = styled.div`
  width: 18px;
  height: 18px;
  background-size: contain;
  background-image: url('/docs/images/github-logo.png');
`;

export const HeaderOther = styled.div`
  height: 35px;
  display: flex;
`;

export const HeaderPayout = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0px 22.5px 0px 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.backgroundHeader2}; /* Old browsers */
  background: -moz-linear-gradient(left, ${(props) => props.theme.backgroundHeader2} 0%, ${(props) => props.theme.backgroundHeader3} 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, ${(props) => props.theme.backgroundHeader2} 0%,${(props) => props.theme.backgroundHeader3} 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, ${(props) => props.theme.backgroundHeader2} 0%,${(props) => props.theme.backgroundHeader3} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${(props) => props.theme.backgroundHeader2}, endColorstr=${(props) => props.theme.backgroundHeader3},GradientType=1 ); /* IE6-9 */
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderTextSecondary = styled.div `
  color: ${(props) => props.theme.textHeader};
  padding: 5px 15px;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accessoryHover};
  }
`;

export const HeaderDropdown = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  color: ${(props) => props.theme.textHeader};
  transition: 0.2s ease-in all;
  @media (max-width: 600px) {
    display: flex;
  }
  &:hover {
    color: ${(props) => props.theme.accessoryHover};
    border: 0px;
    cursor: pointer;
  }
`;

export const HeaderToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  color: ${(props) => props.theme.textHeader};
  transition: 0.2s ease-in all;
  @media (max-width: 1024px) {
    margin-left: 0px;
  }
  &:hover {
    color: ${(props) => props.theme.accessoryHover};
    border: 0px;
    cursor: pointer;
  }
`;
