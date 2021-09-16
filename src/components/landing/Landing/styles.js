import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 145px 40px 170px;
  margin-bottom: -120px;
  background-image: url('/images/blinkhash-background-shapes-main.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  @media (max-width: 800px) {
    padding: 115px 25px 110px;
    margin-bottom: -60px;
  }
`;

export const LandingInner = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    width: calc(100% - 50px);
    flex-direction: column;
    align-items: center;
  }
`;

export const LandingEntry = styled.div`
    width: calc(100% - 350px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 60px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    margin-bottom: 60px;
    margin-right: 0px;
  }
  @media (max-width: 800px) {
    margin-bottom: 60px;
  }
`;

export const LandingTitle = styled.div`
  color: ${(props) => props.theme.textLanding};
  line-height: 40px;
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    line-height: 32px;
  }
  @media (max-width: 800px) {
    line-height: 26px;
  }
`;

export const LandingTagline = styled.div`
  color: ${(props) => props.theme.textLanding};
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const LandingButtons = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LandingButtonsInner = styled.div`
  margin-right: 15px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const LandingImage = styled.img`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 250px;
  }
`;
