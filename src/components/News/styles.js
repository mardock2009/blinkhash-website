import styled from 'styled-components';

export const NewsContainer = styled.div`
  width: 100%;
`;

export const NewsInner = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 25px;
`;

export const NewsTitle = styled.div`
  color: ${(props) => props.theme.textModule};
  line-height: 40px;
  margin-bottom: 15px;
`;

export const NewsText = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  color: ${(props) => props.theme.textModule};
`;
