import styled from 'styled-components';

export const SidenavContainer = styled.div`
  width: 280px;
  padding: 20px 25px;
  display: flex;
  top: 65px;
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  border-radius: 0px 10px 0px 0px;
  color: ${(props) => props.theme.textSidenav};
  background-color: ${(props) => props.theme.backgroundSidenav};
  border: 1px solid ${(props) => props.theme.borderSidenav};
  transition: 0.2s ease-in all;
  overflow-x: hidden;
  overflow-y: overlay;
  z-index: 998;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 800px) {
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.backgroundSidenav};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollSidenav};
  }
`;

export const SidenavInner = styled.div`
  width: 100%;
  height: 100%;
`;
