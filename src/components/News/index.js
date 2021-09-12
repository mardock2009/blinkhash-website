/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../Card/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function News() {
  return (
    <Local.NewsContainer>
      <Local.NewsInner>
        <Local.NewsSection>
          <Local.NewsTitle>
            <Local.NewsTitleMain>
              <Global.Header2>
                {'News &'}
              </Global.Header2>
            </Local.NewsTitleMain>
            <Local.NewsTitleBold>
              <Global.Header2 bold>
                {'Announcements'}
              </Global.Header2>
            </Local.NewsTitleBold>
          </Local.NewsTitle>
          <Local.NewsText>
            <Global.Body1>
              {'Check out our Medium & Twitter for the major milestones we\'ve hit recently as well as updates on our current projects.'}
            </Global.Body1>
          </Local.NewsText>
        </Local.NewsSection>
        <Local.NewsCards>
          <CardExternal
            link={'https://www.medium.com/@blinkhash'}
            text={'Medium'}
          />
          <CardExternal
            link={'https://twitter.com/blinkhash1'}
            text={'Twitter'}
          />
        </Local.NewsCards>
      </Local.NewsInner>
    </Local.NewsContainer>
  );
}
