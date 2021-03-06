import styled from 'styled-components';

export const StartingContainer = styled.div`
  width: 100%;
  padding: 50px 40px 80px;
  background-color: ${(props) => props.theme.backgroundStarting};
  background-image: url('/images/blinkhash-background-shapes-main.png');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 50px;
  }
`;

export const StartingInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StartingSection = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const StartingTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
`;

export const StartingTitleMain = styled.div`
  color: ${(props) => props.theme.textStarting};
`;

export const StartingTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textStarting};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const StartingButtons = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: -15px;
  }
`;

export const StartingButtonsInner = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StartingLink = styled.div`
  margin-right: 15px;
  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 15px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
