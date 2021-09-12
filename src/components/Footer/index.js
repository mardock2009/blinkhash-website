/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Footer() {
  return (
    <Local.FooterContainer>
      <Local.FooterInner>
        <Local.FooterText>
          <Global.Body2>
            {'Terms | Privacy'}
          </Global.Body2>
        </Local.FooterText>
        <Local.FooterText>
          <Global.Body2>
            {'© 2021 - Blinkhash Mining'}
          </Global.Body2>
        </Local.FooterText>
      </Local.FooterInner>
    </Local.FooterContainer>
  );
}
