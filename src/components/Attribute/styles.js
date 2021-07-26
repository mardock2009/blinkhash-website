import styled from 'styled-components';

export const AttributeMain = styled.div`
  width: calc(50% - 37.5px);
  max-width: 450px;
  height: 100%;
  margin: 25px;
  border-radius: 10px;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  &:last-child {
    margin-left: 0px;
  }
  @media (max-width: 800px) {
    width: calc(100% - 50px);
    &:last-child {
      margin-top: 0px;
      margin-left: 25px;
    }
  }
`;

export const AttributeIcon = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundAttribute};
  border-radius: 10px 10px 0px 0px;
  ${(props) => props.theme.type === 'dark' && `
    border: 1px solid ${props.theme.borderAttribute};
    border-bottom: 3px solid ${props.theme.borderAttribute};
  `}
`;

export const AttributeIconInner = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  color: ${(props) => props.theme.textAttributeSecondary};
  background-color: ${(props) => props.theme.backgroundAttributeTertiary};
  font-size: 48px;
  transition: 0.2s ease-in all;
  ${AttributeMain}:hover & {
      color: ${(props) => props.theme.textAttributeTertiary};
      background-color: ${(props) => props.theme.accessoryHover};
  }
`;

export const AttributeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 0px 0px 10px 10px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundAttributeSecondary};
  border: 1px solid ${(props) => props.theme.borderAttribute};
  border-top: 0px;
  transition: 0.2s ease-in all;
`;

export const AttributeTitle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textAttribute};
  text-align: center;
  margin-bottom: 15px;
`;

export const AttributeText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textAttribute};
  text-align: center;
  margin-bottom: 8px;
`;

export const AttributeButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
