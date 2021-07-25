import styled from 'styled-components';

export const ButtonContainer = styled.div`
  min-width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-right: 15px;
  background-color: ${(props) => props.theme.backgroundButton};
  border-radius: 5px;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.accessoryHover};
  }
`;

export const ButtonText = styled.div`
  color: ${(props) => props.theme.textButton};
`;
