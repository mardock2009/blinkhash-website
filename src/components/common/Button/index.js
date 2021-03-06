/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkInternal, LinkExternal } from '../Link/index';
import * as Global from '../../../styles';
import * as Local from './styles';

export function ButtonActive(props) {
  return (
    <Local.ButtonActive onClick={props.onClick}>
      <Local.ButtonText>
        <Global.Body2>{props.text}</Global.Body2>
      </Local.ButtonText>
    </Local.ButtonActive>
  );
}

export function ButtonPassive(props) {
  return (
    <Local.ButtonPassive onClick={props.onClick}>
      <Local.ButtonTextSecondary>
        <Global.Body2>{props.text}</Global.Body2>
      </Local.ButtonTextSecondary>
    </Local.ButtonPassive>
  );
}

export function ButtonDisabled(props) {
  return (
    <Local.ButtonDisabled>
      <Local.ButtonText>
        <Global.Body2>{props.text}</Global.Body2>
      </Local.ButtonText>
    </Local.ButtonDisabled>
  );
}

export function ButtonInternal(props) {
  return (
    <LinkInternal link={props.link}>
      <Local.ButtonActive>
        <Local.ButtonText>
          <Global.Body2>{props.text}</Global.Body2>
        </Local.ButtonText>
      </Local.ButtonActive>
    </LinkInternal>
  );
}

export function ButtonExternal(props) {
  return (
    <LinkExternal link={props.link}>
      <Local.ButtonActive>
        <Local.ButtonText>
          <Global.Body2>{props.text}</Global.Body2>
        </Local.ButtonText>
      </Local.ButtonActive>
    </LinkExternal>
  );
}
