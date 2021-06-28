/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Local from './styles';

export default function Sidenav(props) {
  return (
    <Local.SidenavMain>
      <Local.SidenavInner>
        {props.children}
      </Local.SidenavInner>
    </Local.SidenavMain>
  );
}
