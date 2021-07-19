import styled from 'styled-components';

export const FooterMain = styled.div`
  width: 100%;
  height: 55px;
  border-top: 1px solid ${(props) => props.theme.borderFooter};
  background-color: ${(props) => props.theme.backgroundFooter};
  transition: 0.2s ease-in all;
`;

export const FooterInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
`;

export const FooterText = styled.div`
  color: ${(props) => props.theme.textFooter};
`;
