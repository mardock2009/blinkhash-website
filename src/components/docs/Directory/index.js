/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LinkInternal } from '../../common/Link/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Directory(props) {
  const router = useRouter();
  const [path,] = useState(router.pathname);

  function formatText(page) {
    const splitPage = page.split('/');
    const output = splitPage[splitPage.length - 1];
    return output.charAt(0).toUpperCase() + output.slice(1);
  }

  return (
    <Local.DirectoryContainer>
      <Local.DirectoryInner>
        <Local.DirectoryLinks>
          <Local.DirectoryTitle>
            <Global.Header2 bold>
              {'Foundation Core v1'}
            </Global.Header2>
          </Local.DirectoryTitle>
          <Local.DirectoryText>
            {(props.pages.map((page, idx) => {
              return (
                <React.Fragment key={idx}>
                  <LinkInternal link={page}>
                    <Local.DirectoryLink
                      active={(idx === 0) ? (
                        ['/docs/foundation', props.component, page].includes(path)) : (
                        [page].includes(path))
                      }
                    >
                      <Global.Body1>{formatText(page)}</Global.Body1>
                    </Local.DirectoryLink>
                  </LinkInternal>
                  {(idx !== props.pages.length - 1) ? (
                    <Local.DirectorySeparator>
                      {'/'}
                    </Local.DirectorySeparator>
                  ) : (
                    <React.Fragment />
                  )}
                </React.Fragment>
              );
            }))}
          </Local.DirectoryText>
        </Local.DirectoryLinks>
        <Local.DirectoryImage
          src={(props.theme === 'light') ?
            '/images/blinkhash-background-light.png' :
            '/images/blinkhash-background-dark.png'}
          alt=''
        />

      </Local.DirectoryInner>
    </Local.DirectoryContainer>
  );
}
