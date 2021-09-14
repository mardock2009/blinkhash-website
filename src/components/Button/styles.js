import styled from 'styled-components';

export const ButtonActive = styled.div`
  min-width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-right: 15px;
  background: ${(props) => props.theme.backgroundButton}; /* Old browsers */
  background: -moz-linear-gradient(left, ${(props) => props.theme.backgroundButton} 0%, ${(props) => props.theme.backgroundButtonSecondary} 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, ${(props) => props.theme.backgroundButton} 0%,${(props) => props.theme.backgroundButtonSecondary} 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, ${(props) => props.theme.backgroundButton} 0%,${(props) => props.theme.backgroundButtonSecondary} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#434b9f', endColorstr='#192171',GradientType=1 ); /* IE6-9 */
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  ${(props) => props.theme.type === 'dark' && `
    border: 1px solid ${props.theme.borderButton};
  `}
  &:hover {
    background: ${(props) => props.theme.accessoryHover};
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const ButtonDisabled = styled.div`
  min-width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-right: 15px;
  background-color: ${(props) => props.theme.backgroundButtonTertiary};
  border-radius: 5px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const ButtonText = styled.div`
  color: ${(props) => props.theme.textButton};
`;
