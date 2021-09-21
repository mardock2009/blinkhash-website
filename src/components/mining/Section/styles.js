import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
`;

export const SectionInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const SectionDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.backgroundSection};
  padding-top: 50px;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding-top: 25px;
  }
`;
