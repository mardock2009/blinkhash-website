/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as Global from '../../styles';
import * as Local from './styles';

const license = `
Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).
For further details or to check out the code behind this webpage, see the [blinkhash-documentation](https://github.com/blinkhash/blinkhash-documentation)
repository.
`;

export default function License() {
  return (
    <Local.LicenseContainer>
      <Local.LicenseSection>
        <Global.Body2>
          <ReactMarkdown>
            {license}
          </ReactMarkdown>
        </Global.Body2>
      </Local.LicenseSection>
      <Local.LicenseUpdated>
        <Global.Body2>
          {'Last updated 06/20/2021'}
        </Global.Body2>
      </Local.LicenseUpdated>
    </Local.LicenseContainer>
  );
}
