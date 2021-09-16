import styled from 'styled-components';

export const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 40px 160px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundPartners};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 100px;
    margin-bottom: -60px;
  }
`;

export const PartnersInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PartnersSection = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const PartnersTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`;

export const PartnersTitleMain = styled.div`
  color: ${(props) => props.theme.textPartners};
`;

export const PartnersTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textPartners};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const PartnersText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.textPartners};
`;

export const PartnersCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
