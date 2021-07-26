/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonExternal } from '../Button/index';
import Divider from '../Divider/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Community(props) {
  return (
    <Local.CommunityContainer>
      <Local.CommunityInner>
        <Local.CommunityTitle>
          <Global.Header1>
            {"Community Participation"}
          </Global.Header1>
        </Local.CommunityTitle>
        <Local.CommunityText>
          <Global.Header4>
            {""}
          </Global.Header4>
        </Local.CommunityText>
      </Local.CommunityInner>
      <Divider theme={props.theme} gray />
    </Local.CommunityContainer>
  );
}
