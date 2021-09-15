import styled from 'styled-components';

export const CardContainer = styled.div`
  width: calc(100% - 15px);
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: center;
  background: ${(props) => props.theme.backgroundButton}; /* Old browsers */
  background: -moz-linear-gradient(left, ${(props) => props.theme.backgroundButton} 0%, ${(props) => props.theme.backgroundButton2} 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, ${(props) => props.theme.backgroundButton} 0%,${(props) => props.theme.backgroundButton2} 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, ${(props) => props.theme.backgroundButton} 0%,${(props) => props.theme.backgroundButton2} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
`;

export const CardText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textButton};
`;
