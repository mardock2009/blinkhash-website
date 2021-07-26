import styled from 'styled-components';

export const CommunityContainer = styled.div`
  width: 100%;
`;

export const CommunityInner = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 25px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }
  @media (max-width: 800px) {
    padding-bottom: 40px;
  }
`;

export const CommunityTitle = styled.div`
  color: ${(props) => props.theme.textModule};
  line-height: 40px;
  margin-bottom: 15px;
`;

export const CommunityText = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  color: ${(props) => props.theme.textModule};
`;
