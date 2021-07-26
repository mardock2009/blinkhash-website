/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkInternal, LinkExternal } from '../Links/index';
import * as Global from '../../styles';
import * as Local from './styles';

export function CardInternal(props) {
  return (
    <Local.CardContainer>
      <Local.CardText>
        <LinkInternal link={props.link}>
          <Global.Body1>{props.text}</Global.Body1>
        </LinkInternal>
      </Local.CardText>
    </Local.CardContainer>
  );
}

export function CardExternal(props) {
  return (
    <LinkExternal link={props.link}>
      <Local.CardContainer>
        <Local.CardText>
          <Global.Body1>{props.text}</Global.Body1>
        </Local.CardText>
      </Local.CardContainer>
    </LinkExternal>
  );
}
