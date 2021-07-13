/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import Button from '../Button/index';
import { LinkExternal } from '../Links/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Information(props) {
  return (
    <Local.InformationMain>
      <Local.InformationInner>
        <Local.InformationSocial
          style={{ backgroundImage: `url(${'/images/banner-background.png'})` }}
        >
          <Local.InformationText>
            <Global.Body1>
              {'Have a question? Connect with the community in the Blinkhash Discord'}
            </Global.Body1>
          </Local.InformationText>
          <LinkExternal link={'https://discord.gg/8xtHZFKJQY'}>
            <Button text={'Continue'} />
          </LinkExternal>
        </Local.InformationSocial>
        <Local.InformationDocumentation>
          <Local.InformationLocation>
            <Local.InformationDirectory>
              <Global.Body2>
                {'Blinkhash > Documentation'}
              </Global.Body2>
            </Local.InformationDirectory>
            <Local.InformationVersion>
              <Global.Body2>
                {'Version > v1.0.0'}
              </Global.Body2>
            </Local.InformationVersion>
          </Local.InformationLocation>
          {props.children}
        </Local.InformationDocumentation>
      </Local.InformationInner>
    </Local.InformationMain>
  );
}
