/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Landing() {
  return (
    <Local.LandingContainer>
      <Local.LandingInner>
        <Local.LandingEntry>
          <Local.LandingTitle>
            <Global.Header1 bold>
              {'Blinkhash is an expansive, transparent ecosystem for cryptocurrency mining'}
            </Global.Header1>
          </Local.LandingTitle>
          <Local.LandingTagline>
            <Global.Header3>
              {'Blinkhash\'s goal is to make mining pool ownership accessible for the layman. Click the links below to get started.'}
            </Global.Header3>
          </Local.LandingTagline>
          <Local.LandingButtons>
            <ButtonInternal
              link={'/foundation'}
              text={'Foundation'}
            />
            <ButtonDisabled
              link={''}
              text={'Coming Soon'}
            />
          </Local.LandingButtons>
        </Local.LandingEntry>
        <Local.LandingImage
          src={'/docs/images/blinkhash-banner-main.png'}
          alt=''
        />
      </Local.LandingInner>
    </Local.LandingContainer>
  );
}
