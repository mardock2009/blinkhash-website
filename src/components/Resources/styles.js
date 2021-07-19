import styled from 'styled-components';

export const ResourcesMain = styled.div`
  width: 220px;
  padding: 3px 25px 0px;
  margin: 20px 0px 0px;
  top: 80px;
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  color: ${(props) => props.theme.textResources};
  border-left: 3px solid ${(props) => props.theme.borderResources};
  background-color: ${(props) => props.theme.backgroundResources};
  transition: 0.2s ease-in all;
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const ResourcesInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResourcesTitle = styled.div`
  width: 100%;
`;

export const ResourcesSection = styled.div`
  margin: 10px 0px;
  &:last-child {
    margin-bottom: 2px
  }
`;
