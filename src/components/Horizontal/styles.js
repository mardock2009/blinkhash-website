import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HorizontalInner = styled.hr`
  width: calc(100% - 80px);
  max-width: 800px;
  margin: 80px 40px;
  border: 1px solid ${(props) => props.theme.borderModule};
`;
