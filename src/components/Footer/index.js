/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Footer() {
  return (
    <Local.FooterMain>
      <Local.FooterInner>
        <Local.FooterText>
          <Global.Body>
            {'Terms | Privacy'}
          </Global.Body>
        </Local.FooterText>
        <Local.FooterText>
          <Global.Body>
            {'© 2021 - Blinkhash Mining'}
          </Global.Body>
        </Local.FooterText>
      </Local.FooterInner>
    </Local.FooterMain>
  );
}
