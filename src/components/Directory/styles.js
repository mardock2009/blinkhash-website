import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 40px 100px;
  margin-bottom: -200px;
  background-image: url('/docs/images/blinkhash-background-shapes-main.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  @media (max-width: 1024px) {
    min-height: 600px;
    margin-top: -50px;
  }
`;

export const DirectoryInner = styled.div`
  width: 100%;
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DirectoryLinks = styled.div`
  width: calc(100% - 420px);
  color: ${(props) => props.theme.textModule};
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

export const DirectoryTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  transition: 0.2s ease-in all;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const DirectoryText = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const DirectoryLink = styled.div`
  padding-bottom: 3px;
  margin-right: 15px;
  margin-bottom: -5px;
  color: ${(props) => props.theme.textDirectory};
  cursor: pointer;
  transition: 0.2s ease-in all;
  ${(props) => props.active && `
    border-bottom: 2px solid ${props.theme.borderDirectory};
  `}
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.borderDirectory};
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const DirectorySeparator = styled.div`
  margin-top: -3px;
  margin-right: 15px;
  color: ${(props) => props.theme.textDirectory};
  font-size: 18px;
  transition: 0.2s ease-in all;
`;

export const DirectoryImage = styled.img`
  width: 600px;
  margin-right: -200px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
