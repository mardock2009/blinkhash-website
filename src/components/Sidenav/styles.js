import styled from 'styled-components';

export const SidenavMain = styled.div`
  width: 280px;
  min-height: calc(100vh - 70px);
  padding: 20px 25px;
  display: flex;
  top: 70px;
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  border-right: 1px solid ${(props) => props.theme.borderSidenav};
  background-color: ${(props) => props.theme.backgroundSidenav};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const SidenavInner = styled.div`
  width: 100%;
  height: 100%;
`;
