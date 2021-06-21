import styled from 'styled-components';

export const BannerMain = styled.div`
  width: 100%;
  padding: 20px 25px;
  display: flex;
  margin-top: 70px;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;
  background-color: ${(props) => props.theme.backgroundBanner};
  border-bottom: 1px solid ${(props) => props.theme.borderBanner};
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  transition: 0.2s ease-in all;
`;

export const BannerInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BannerTitle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.titleBanner};
  margin-bottom: 15px;
  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
`;

export const BannerSelect = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

export const BannerSelectItem = styled.div`
  color: ${(props) => props.theme.textBanner};
  padding-bottom: 3px;
  margin-right: 30px;
  margin-bottom: -5px;
  border-bottom: 2px solid ${(props) => props.theme.backgroundBanner};
  transition: 0.2s ease-in all;
  ${(props) => props.active && `
    border-bottom: 2px solid ${props.theme.borderBanner};
  `}
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.borderBanner};
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
