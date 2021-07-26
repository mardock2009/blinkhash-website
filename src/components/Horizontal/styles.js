import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HorizontalInner = styled.hr`
  width: 100%;
  max-width: 800px;
  margin: 0px 60px 80px;
  border: 1px solid ${(props) => props.theme.borderModule};
  @media (max-width: 1024px) {
    margin: 0px 60px 60px;
  }
  @media (max-width: 800px) {
    margin: 0px 60px 40px;
  }
`;
