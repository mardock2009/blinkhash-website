/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonExternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Information(props) {
  return (
    <Local.InformationContainer>
      <Local.InformationInner>
        <Local.InformationSocial
          style={{ backgroundImage: `url(${'/docs/images/banner-background.png'})` }}
        >
          <Local.InformationText>
            <Global.Body1>
              {'Have a question? Connect with the community in the Blinkhash Discord'}
            </Global.Body1>
          </Local.InformationText>
          <ButtonExternal
            link={'https://discord.gg/8xtHZFKJQY'}
            text={'Continue'}
          />
        </Local.InformationSocial>
        <Local.InformationDocumentation>
          {props.children}
        </Local.InformationDocumentation>
      </Local.InformationInner>
    </Local.InformationContainer>
  );
}
