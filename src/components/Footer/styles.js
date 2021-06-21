import styled from 'styled-components';

export const FooterMain = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderFooter};
  background-color: ${(props) => props.theme.backgroundFooter};
`;
