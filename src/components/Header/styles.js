import styled from 'styled-components';

export const HeaderMain = styled.div`
  width: 100%;
  height: 70px;
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
`;

export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.textHeader};
  @media (max-width: 450px) {
    display: none;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const HeaderPages = styled.div`
  display: flex;
  padding: 10px 20px;
  border-right: 1px solid ${(props) => props.theme.borderHeader};
  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderText = styled.div `
  color: ${(props) => props.theme.textHeader};
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderSocial = styled.div`
  display: flex;
  padding: 0px 20px;
  border-right: 1px solid ${(props) => props.theme.borderHeader};
`;

export const HeaderSocialIcon = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.borderHeader};
  color: ${(props) => props.theme.textHeader};
  font-size: 18px;
  transition: 0.2s ease-in all;
  &:hover {
    color: ${(props) => props.theme.textHeader};
    background-color: ${(props) => props.theme.accessoryHover};
    border: 0px;
    cursor: pointer;
  }
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const Discord = styled.div`
  width: 19px;
  height: 14px;
  background-size: contain;
  background-image: url('/images/discord-logo.png');
`;

export const Medium = styled.div`
  width: 19px;
  height: 14px;
  background-size: contain;
  background-image: url('/images/medium-logo.png');
`;

export const Github = styled.div`
  width: 22px;
  height: 22px;
  background-size: contain;
  background-image: url('/images/github-logo.png');
`;

export const HeaderTheme = styled.div`
  display: flex;
  padding-left: 20px;
`;

export const HeaderToggle = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.borderHeader};
  color: ${(props) => props.theme.textHeader};
  font-size: 18px;
  transition: 0.2s ease-in all;
  &:hover {
    background-color: ${(props) => props.theme.accessoryHover};
    border: 0px;
    cursor: pointer;
  }
`;
