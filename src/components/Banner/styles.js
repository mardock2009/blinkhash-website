import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  padding: 20px 25px;
  border: 1px solid ${(props) => props.theme.borderBanner};
  background-color: ${(props) => props.theme.backgroundBanner};
  border-radius: 10px;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 800px) {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
    background-color: ${(props) => props.theme.backgroundBanner2};
    box-shadow: none;
  }
`;

export const BannerInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BannerSection = styled.div`
  width: 100%;
  @media (max-width: 1024px) {
    margin-bottom: 15px;
    text-align: center;
  }
  @media (max-width: 800px) {
    margin-bottom: 0px;
    text-align: left;
  }
  @media (max-width: 600px) {
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const BannerTitle = styled.div`
  width: 100%;
  margin-bottom: 3px;
`;

export const BannerText = styled.div`
  width: 100%;
`;
