/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../../common/Button/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Landing() {
  return (
    <Local.LandingContainer>
      <Local.LandingInner>
        <Local.LandingEntry>
          <Local.LandingTitle>
            <Global.Header1 bold>
              {'Blinkhash'}
            </Global.Header1>
          </Local.LandingTitle>
          <Local.LandingTagline>
            <Global.Header3>
              {'The Mining Experience, Streamlined'}
            </Global.Header3>
          </Local.LandingTagline>
          <Local.LandingButtons>
            <Local.LandingButtonsInner>
              <ButtonDisabled
                text={'Browse Mining Pools'}
              />
            </Local.LandingButtonsInner>
            <Local.LandingButtonsInner>
              <ButtonInternal
                link={'/docs'}
                text={'Explore Documentation'}
              />
            </Local.LandingButtonsInner>
          </Local.LandingButtons>
        </Local.LandingEntry>
        <Local.LandingImage
          src={'/images/blinkhash-banner-main.png'}
          alt=''
        />
      </Local.LandingInner>
    </Local.LandingContainer>
  );
}
