/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../Card/index';
import { community } from '../../../text/common/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Community(props) {
  return (
    <Local.CommunityContainer>
      <Local.CommunityInner>
        <Local.CommunityImage
          style={{ paddingRight: '50px' }}
          src={(props.theme === 'light') ?
            '/images/blinkhash-community-light.png' :
            '/images/blinkhash-community-dark.png'}
          alt=''
        />
        <Local.CommunitySection>
          <Local.CommunityTitle>
            <Local.CommunityTitleMain>
              <Global.Header3>
                {'Join the'}
              </Global.Header3>
            </Local.CommunityTitleMain>
            <Local.CommunityTitleBold>
              <Global.Header3 bold>
                {'Community'}
              </Global.Header3>
            </Local.CommunityTitleBold>
          </Local.CommunityTitle>
          <Local.CommunityText>
            <Global.Body1>
              {community}
            </Global.Body1>
          </Local.CommunityText>
          <Local.CommunityCards>
            <CardExternal
              link={'https://github.com/blinkhash'}
              text={'Github'}
            />
            <CardExternal
              link={'https://bitcointalk.org/index.php?topic=5333858.0'}
              text={'Bitcointalk'}
            />
            <CardExternal
              link={'https://discord.gg/8xtHZFKJQY'}
              text={'Discord'}
            />
          </Local.CommunityCards>
        </Local.CommunitySection>
      </Local.CommunityInner>
    </Local.CommunityContainer>
  );
}
