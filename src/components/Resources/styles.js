import styled from 'styled-components';

export const ResourcesContainer = styled.div`
  width: 280px;
  height: calc(100vh - 65px);
  display: flex;
  top: 65px;
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  border-radius: 10px 0px 0px 0px;
  color: ${(props) => props.theme.textResources};
  background-color: ${(props) => props.theme.backgroundResources};
  border: 1px solid ${(props) => props.theme.borderResources};
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const ResourcesInner = styled.div`
  width: 100%;
`;

export const ResourcesSection = styled.div`
  width: 100%;
  padding: 20px 25px 15px 25px;
  border-bottom: 1px solid ${(props) => props.theme.borderResources};
`;

export const ResourcesTitle = styled.div`
  width: calc(100% + 25px);
  padding: 3px 0px 3px 25px;
  border-radius: 0px 10px 10px 0px;
  margin-left: -25px;
  background-color: ${(props) => props.theme.backgroundResourcesSecondary};
  transition: 0.2s ease-in all;
`;

export const ResourcesText = styled.div`
  width: calc(100% + 25px);
  padding: 3px 0px 3px 25px;
  border-radius: 0px 10px 10px 0px;
  margin-left: -25px;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
  }
`;
