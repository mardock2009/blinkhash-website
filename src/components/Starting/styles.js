import styled from 'styled-components';

export const StartingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.backgroundModule};
  @media (max-width: 1024px) {
    padding-bottom: 90px;
  }
  @media (max-width: 800px) {
    padding-bottom: 100px;
  }
`;

export const StartingInner = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 25px;
`;

export const StartingTitle = styled.div`
  color: ${(props) => props.theme.textModuleSecondary};
  line-height: 40px;
  margin-bottom: 15px;
`;
