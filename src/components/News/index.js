/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonExternal } from '../Button/index';
import Horizontal from '../Horizontal/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function News(props) {
  return (
    <Local.NewsContainer>
      <Local.NewsInner>
        <Local.NewsTitle>
          <Global.Header1>
            {"News & Announcements"}
          </Global.Header1>
        </Local.NewsTitle>
        <Local.NewsText>
          <Global.Header4>
            {"Check out our Medium for the major milestones we've hit recently, or come hang out in the Discord to get the latest announcements and development updates."}
          </Global.Header4>
        </Local.NewsText>
      </Local.NewsInner>
      <Horizontal />
    </Local.NewsContainer>
  );
}
