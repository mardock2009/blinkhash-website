import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HorizontalInner = styled.hr`
  width: 100%;
  max-width: 800px;
  margin: 80px 25px;
  border: 1px solid ${(props) => props.theme.borderModule};
  @media (max-width: 1024px) {
    margin: 60px 25px;
  }
  @media (max-width: 800px) {
    margin: 40px 25px;
  }
`;
