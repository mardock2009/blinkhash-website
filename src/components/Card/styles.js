import styled from 'styled-components';

export const CardContainer = styled.div`
  width: calc(100% - 15px);
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundButton};
  cursor: pointer;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  ${(props) => props.theme.type === 'dark' && `
    border: 1px solid ${props.theme.borderButton};
  `}
  &:hover {
    background-color: ${(props) => props.theme.accessoryHover};
  }
`;

export const CardText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textButton};
`;
