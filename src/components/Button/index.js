/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Button(props) {
  return (
    <Local.ButtonMain>
      <Local.ButtonText>
        <Global.Body1>{props.text}</Global.Body1>
      </Local.ButtonText>
    </Local.ButtonMain>
  );
}
