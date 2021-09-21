import styled from 'styled-components';

export const MiningContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 40px 170px;
  margin-bottom: -120px;
  background-color: ${(props) => props.theme.backgroundMining};
  transition: 0.2s ease-in all;
  @media (max-width: 800px) {
    padding: 40px 25px 110px;
    margin-bottom: -60px;
  }
`;

export const MiningInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MiningTable = styled.div`
  width: 100%;
  max-width: 960px;
`;

export const MiningTableTitle = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 997;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const MiningTableTitleMain = styled.div`
  color: ${(props) => props.theme.textMining};
`;

export const MiningTableTitleBold = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.textMining};
  @media (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const MiningTableHeader = styled.div`
  width: calc(100% + 10px);
  top: 65px;
  position: sticky;
  position: -webkit-sticky;
  z-index: 996;
  padding: 25px 5px 0px 5px;
  margin: -10px -5px 0px -5px;
  background-color: ${(props) => props.theme.backgroundMining};
  transition: 0.2s ease-in all;
  @media (max-width: 500px) {
    padding-top: 30px;
  }
`;

export const MiningTableFilter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const MiningTableButtons = styled.div`
  display: flex;
  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

export const MiningTableSearch = styled.div`
  height: 40px;
  display: flex;
  position: relative;
`

export const MiningTableSearchIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 15px;
  color: ${(props) => props.theme.textMining2};
`

export const MiningTableSearchInput = styled.input`
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

export const MiningTablePadding = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.backgroundMining};
  margin-top: -5px;
  transition: 0.2s ease-in all;
`;

export const MiningTableColumns = styled.div`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  border: 1px solid ${(props) => props.theme.borderMining};
  transition: 0.2s ease-in all;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: -4px 0px 4px -2px rgba(60, 64, 67, 0.15),
                 0px -4px 4px -2px rgba(60, 64, 67, 0.15),
                 4px 0px 4px -2px rgba(60, 64, 67, 0.15);
  `}
  ${(props) => props.theme.type === 'dark' && `
    box-shadow: -4px 0px 4px -2px rgba(0, 0, 0, 0.15),
                 0px -4px 4px -2px rgba(0, 0, 0, 0.15),
                 4px 0px 4px -2px rgba(0, 0, 0, 0.15);
  `}
`;

export const MiningTableColumnsBody = styled.tbody`
  width: 100%;
  display: flex;
`;

export const MiningTableCellHeader = styled.th`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textMining};
  background-color: ${(props) => props.theme.backgroundMining3};
  transition: 0.2s ease-in all;
  &:first-child {
    border-radius: 5px 0px 0px 0px;
  }
  &:nth-child(2) {
    @media (max-width: 500px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 700px) {
      display: none;
    }
  }
  &:nth-child(5) {
    @media (max-width: 850px) {
      display: none;
    }
  }
  &:nth-child(6) {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &:last-child {
    border-radius: 0px 5px 0px 0px;
  }
`;

export const MiningTableContent = styled.div`
  width: 100%;
  ${(props) => props.theme.type === 'light' && `
    box-shadow: -4px 0px 4px -2px rgba(60, 64, 67, 0.15),
                 0px 5px 4px -2px rgba(60, 64, 67, 0.15),
                 4px 0px 4px -2px rgba(60, 64, 67, 0.15);
  `}
  ${(props) => props.theme.type === 'dark' && `
    box-shadow: -4px 0px 4px -2px rgba(0, 0, 0, 0.15),
                 0px 5px 4px -2px rgba(0, 0, 0, 0.15),
                 4px 0px 4px -2px rgba(0, 0, 0, 0.15);
  `}
`;

export const MiningTableColumnsRow = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${(props) => props.theme.borderMining};
  border-top: 0px;
  background-color: ${(props) => props.theme.backgroundMining3};
  transition: 0.2s ease-in all;
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.backgroundMining4};
  }
  &:last-child {
    border-radius: 0px 0px 5px 5px;
  }
`;

export const MiningTableCellContent = styled.th`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textMining};
  transition: 0.2s ease-in all;
  &:nth-child(2) {
    @media (max-width: 500px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 700px) {
      display: none;
    }
  }
  &:nth-child(5) {
    @media (max-width: 850px) {
      display: none;
    }
  }
  &:nth-child(6) {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
