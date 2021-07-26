import styled from 'styled-components';

export const ModuleContainer = styled.div`
  width: 100%;
  margin-bottom: 95px;
  @media (max-width: 1024px) {
    margin-bottom: 75px;
  }
  @media (max-width: 800px) {
    margin-bottom: 55px;
  }
`;

export const ModuleInner = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 25px;
`;

export const ModuleTitle = styled.div`
  color: ${(props) => props.theme.textModule};
  line-height: 40px;
  margin-bottom: 15px;
`;

export const ModuleText = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  color: ${(props) => props.theme.textModule};
  margin-bottom: 25px;
`;

export const ModuleOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModuleCards = styled.div`
  width: calc(100% - 65px);
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 25px 0px 40px;
  margin-bottom: -15px;
`;
