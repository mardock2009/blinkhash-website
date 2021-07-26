import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: 100%;
`;

export const LandingInner = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 40px 40px;
  }
  @media (max-width: 800px) {
    padding: 40px;
  }
`;

export const LandingEntry = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 40px;
  @media (max-width: 1024px) {
    max-width: 600px;
    margin-bottom: 60px;
    margin-right: 0px;
  }
  @media (max-width: 800px) {
    margin-bottom: 60px;
  }
`;

export const LandingTitle = styled.div`
  color: ${(props) => props.theme.textModule};
  line-height: 40px;
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const LandingTagline = styled.div`
  color: ${(props) => props.theme.textModule};
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const LandingButtons = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const LandingImage = styled.img`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 400px;
  }
`;