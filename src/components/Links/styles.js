import Link from 'next/link';
import styled from 'styled-components';

export const LinkInternal = styled(Link)`
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.accessoryHover};
  }
`;

export const LinkExternal = styled.a`
  text-decoration: none;
  transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.accessoryHover};
  }
`;
