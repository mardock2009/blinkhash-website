import styled from 'styled-components';

export const LicenseMain = styled.div`
  width: 100%;
  padding: 0px 25px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.backgroundLicense};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    border-top: 1px solid ${(props) => props.theme.borderLicense};
    padding-top: 20px;
  }
`;

export const LicenseSection = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textLicense};
`;
