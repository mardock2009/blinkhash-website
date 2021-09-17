import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 40px 100px;
  margin-bottom: -200px;
  background-image: url('/images/blinkhash-background-shapes-main.png');
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.textDirectory};
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const DirectoryTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  transition: 0.2s ease-in all;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const DirectorySearch = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  position: relative;
`

export const DirectorySearchIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.textMining2};
`

export const DirectorySearchInput = styled.input`
  width: 100%;
  min-width: 300px;
  padding: 0px 32px 0px 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderMining};
  color: ${(props) => props.theme.textMining};
  background-color: ${(props) => props.theme.backgroundMining2};
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
  `}
  @media (max-width: 700px) {
    min-width: none;
  }
  &:focus {
    outline: none;
  }
`;

export const DirectoryImage = styled.img`
  width: 600px;
  margin-right: -200px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
