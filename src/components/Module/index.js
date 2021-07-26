/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../Card/index';
import Horizontal from '../Horizontal/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Module(props) {
  return (
    <Local.ModuleContainer>
      <Local.ModuleInner>
        <Local.ModuleTitle>
          <Global.Header1>{props.title}</Global.Header1>
        </Local.ModuleTitle>
        <Local.ModuleText>
          <Global.Header4>{props.text}</Global.Header4>
        </Local.ModuleText>
      </Local.ModuleInner>
      <Local.ModuleOptions>
        <Local.ModuleCards>
          {props.children}
        </Local.ModuleCards>
      </Local.ModuleOptions>
    </Local.ModuleContainer>
  );
}
