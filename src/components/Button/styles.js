import styled from 'styled-components';

export const ButtonMain = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundButton};
  border-radius: 5px;
`;

export const ButtonText = styled.div`
  color: ${(props) => props.theme.textButton};
`;
