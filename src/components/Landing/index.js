/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../Button/index';
import Divider from '../Divider/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Landing(props) {
  return (
    <Local.LandingContainer>
      <Local.LandingInner>
        <Local.LandingEntry>
          <Local.LandingTitle>
            <Global.Header1>
              {"Blinkhash is an expansive, open-source ecosystem for cryptocurrency mining"}
            </Global.Header1>
          </Local.LandingTitle>
          <Local.LandingTagline>
            <Global.Header3>
              {"Blinkhash's goal is to make mining pool ownership accessible for the layman. Click the links below to get started."}
            </Global.Header3>
          </Local.LandingTagline>
          <Local.LandingButtons>
            <ButtonInternal
              link={'/foundation'}
              text={'Foundation Docs'}
            />
            <ButtonDisabled
              link={''}
              text={'Coming Soon'}
            />
          </Local.LandingButtons>
        </Local.LandingEntry>
        <Local.LandingImage
          src={(props.theme === 'light') ? (
            '/docs/images/blinkhash-isometric-light.png') : (
            '/docs/images/blinkhash-isometric-dark.png')
          }
          alt=''
        />
      </Local.LandingInner>
    </Local.LandingContainer>
  );
}
