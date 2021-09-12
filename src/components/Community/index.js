/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../Card/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Community(props) {
  return (
    <Local.CommunityContainer>
      <Local.CommunityInner>
        <Local.CommunityImage
          style={{ paddingRight: '50px' }}
          src={(props.theme === 'light') ?
            '/docs/images/blinkhash-community-light.png' :
            '/docs/images/blinkhash-community-dark.png'}
          alt=''
        />
        <Local.CommunitySection>
          <Local.CommunityTitle>
            <Local.CommunityTitleMain>
              <Global.Header2>
                {'Join the'}
              </Global.Header2>
            </Local.CommunityTitleMain>
            <Local.CommunityTitleBold>
              <Global.Header2 bold>
                {'Community'}
              </Global.Header2>
            </Local.CommunityTitleBold>
          </Local.CommunityTitle>
          <Local.CommunityText>
            <Global.Body1>
              {'Become an active member of the community by joining in the conversation at any of the links below.'}
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
