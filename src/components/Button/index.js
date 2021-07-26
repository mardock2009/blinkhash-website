/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkInternal, LinkExternal } from '../Links/index';
import * as Global from '../../styles';
import * as Local from './styles';

export function ButtonDisabled(props) {
  return (
    <Local.DisabledContainer>
      <Local.ButtonText>
        <Global.Body1>{props.text}</Global.Body1>
      </Local.ButtonText>
    </Local.DisabledContainer>
  );
}

export function ButtonInternal(props) {
  return (
    <LinkInternal link={props.link}>
      <Local.ButtonContainer>
        <Local.ButtonText>
          <Global.Body1>{props.text}</Global.Body1>
        </Local.ButtonText>
      </Local.ButtonContainer>
    </LinkInternal>
  );
}

export function ButtonExternal(props) {
  return (
    <LinkExternal link={props.link}>
      <Local.ButtonContainer>
        <Local.ButtonText>
          <Global.Body1>{props.text}</Global.Body1>
        </Local.ButtonText>
      </Local.ButtonContainer>
    </LinkExternal>
  );
}
