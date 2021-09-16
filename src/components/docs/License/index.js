/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { license } from '../../../text/docs/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function License() {
  return (
    <Local.LicenseContainer>
      <Local.LicenseSection>
        <Global.Body3>
          <ReactMarkdown>
            {license}
          </ReactMarkdown>
        </Global.Body3>
      </Local.LicenseSection>
      <Local.LicenseUpdated>
        <Global.Body3>
          {'Last updated 06/20/2021'}
        </Global.Body3>
      </Local.LicenseUpdated>
    </Local.LicenseContainer>
  );
}
