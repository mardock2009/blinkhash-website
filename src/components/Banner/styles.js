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
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
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
`;
