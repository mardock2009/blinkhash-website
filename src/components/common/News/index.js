/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../Card/index';
import { news } from '../../../text/common/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function News() {
  return (
    <Local.NewsContainer>
      <Local.NewsInner>
        <Local.NewsSection>
          <Local.NewsTitle>
            <Local.NewsTitleMain>
              <Global.Header3>
                {'News &'}
              </Global.Header3>
            </Local.NewsTitleMain>
            <Local.NewsTitleBold>
              <Global.Header3 bold>
                {'Announcements'}
              </Global.Header3>
            </Local.NewsTitleBold>
          </Local.NewsTitle>
          <Local.NewsText>
            <Global.Body1>
              {news}
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
