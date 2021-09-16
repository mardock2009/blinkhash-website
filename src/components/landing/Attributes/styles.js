import styled from 'styled-components';

export const AttributesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 40px 120px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundAttributes};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 0px 25px 60px;
    margin-bottom: -60px;
  }
`;

export const AttributesInner = styled.div`
  width: 100%;
  max-width: 985px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -125px -25px -100px 0px;
  @media (max-width: 985px) {
    max-width: 450px;
    justify-content: center;
  }
`;

export const AttributesSection = styled.div`
  width: 100%;
  max-width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px 25px 0px 0px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderAttributes};
  color: ${(props) => props.theme.textAttributes};
  background-color: ${(props) => props.theme.backgroundAttributes2};
  position: relative;
  z-index: 999;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  ${(props) => props.theme.type === 'dark' && `
    border: 2px solid ${props.theme.borderAttributes};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15),0 2px 6px 2px rgba(0, 0, 0, 0.15);
  `}
  @media (max-width: 500px) {
    &:nth-child(even) {
      display: none;
    }
  }
`;

export const AttributesImage = styled.img`
  height: 80px;
  margin-bottom: 15px;
`;

export const AttributesTitle = styled.div`
  padding: 0px 5px;
`;

export const AttributesText = styled.div`
  width: 100%;
  padding: 5px 15px 0px 15px;
  text-align: center;
`;
