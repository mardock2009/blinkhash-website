/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Footer() {
  return (
    <Local.FooterMain>
      <Local.FooterInner>
        <Local.FooterText>
          <Global.Body1>
            {'Terms | Privacy'}
          </Global.Body1>
        </Local.FooterText>
        <Local.FooterText>
          <Global.Body1>
            {'© 2021 - Blinkhash Mining'}
          </Global.Body1>
        </Local.FooterText>
      </Local.FooterInner>
    </Local.FooterMain>
  );
}
