import { Link } from 'react-router-dom';
import styled from 'styled-components';

import discord from '../../assets/images/discord-logo.png';
import medium from '../../assets/images/medium-logo.png';
import github from '../../assets/images/github-logo.png';

export const HeaderMain = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
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

export const HeaderLinkInternal = styled(Link)`
  margin: 0px 10px;
  color: ${(props) => props.theme.textHeader};
  line-height: 16px;
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    color: ${(props) => props.theme.textHover};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const HeaderLinkExternal = styled.div`
  margin: 0px 10px;
  color: ${(props) => props.theme.textHeader};
  line-height: 16px;
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    color: ${(props) => props.theme.textHover};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const HeaderLinkModal = styled.div`
  margin: 0px 10px;
  color: ${(props) => props.theme.textHeader};
  line-height: 16px;
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    color: ${(props) => props.theme.textHover};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const HeaderPages = styled.div`
  display: flex;
  padding: 10px 20px;
  border-right: 1px solid ${(props) => props.theme.borderHeader};
  @media (max-width: 700px) {
    display: none;
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

export const Discord = styled.section`
  width: 19px;
  height: 14px;
  background-size: contain;
  background-image: url(${discord});
  transition: 0.2s ease-in all;
`;

export const Medium = styled.section`
  width: 19px;
  height: 14px;
  background-size: contain;
  background-image: url(${medium});
  transition: 0.2s ease-in all;
`;

export const Github = styled.section`
  width: 22px;
  height: 22px;
  background-size: contain;
  background-image: url(${github});
  transition: 0.2s ease-in all;
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
    color: ${(props) => props.theme.textHeader};
    background-color: ${(props) => props.theme.accessoryHover};
    border: 0px;
    cursor: pointer;
  }
`;
