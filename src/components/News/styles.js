import styled from 'styled-components';

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 40px 155px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundNews};
  background-image: url('/docs/images/blinkhash-background-shapes-reversed.png');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 95px;
    margin-bottom: -60px;
  }
`;

export const NewsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewsSection = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const NewsTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`;

export const NewsTitleMain = styled.div`
  color: ${(props) => props.theme.textModule};
`;

export const NewsTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textModule};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const NewsText = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.textModule};
`;

export const NewsCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
