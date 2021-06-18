import styled from 'styled-components';

export const Body = styled.section`
  font-family: "Lato Regular", sans-serif;
  font-weight: 400;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header1 = styled.section`
  font-family: "Lato Bold", sans-serif;
  font-weight: 400;
  font-size: 28px;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const Header2 = styled.section`
  font-family: "Lato Regular", sans-serif;
  font-weight: 400;
  font-size: 22px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Header3 = styled.section`
  font-family: "Lato Regular", sans-serif;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

export const Header4 = styled.section`
  font-family: "Lato Regular", sans-serif;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
