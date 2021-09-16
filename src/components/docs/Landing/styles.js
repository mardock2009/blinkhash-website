import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 150px 40px 200px;
  margin-bottom: -120px;
  background-image: url('/images/blinkhash-background-shapes-main.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  @media (max-width: 800px) {
    padding: 135px 25px;
    margin-bottom: -60px;
  }
`;

export const LandingInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: calc(100% - 50px);
    flex-direction: column;
  }
`;

export const LandingEntry = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
  @media (max-width: 1024px) {
    max-width: 500px;
    margin-right: 0px;
  }
`;

export const LandingTitle = styled.div`
  color: ${(props) => props.theme.textLanding};
  line-height: 40px;
  margin-bottom: 15px;
  text-align: center;
  @media (max-width: 800px) {
    line-height: 32px;
  }
  @media (max-width: 800px) {
    line-height: 26px;
  }
`;

export const LandingTagline = styled.div`
  color: ${(props) => props.theme.textLanding};
  margin-bottom: 20px;
  text-align: center;
`;

export const LandingButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const LandingImage = styled.img`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
`;
