import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkInternal = styled(Link)`
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const LinkExternal = styled.a`
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const LinkModal = styled.div`
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;