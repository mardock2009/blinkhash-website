/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Button(props) {
  return (
    <Local.ButtonMain>
      <Local.ButtonText>
        <Global.Body>{props.text}</Global.Body>
      </Local.ButtonText>
    </Local.ButtonMain>
  );
}
