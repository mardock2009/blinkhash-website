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
            <Global.Header2 bold>
              {'Blinkhash is an expansive, transparent ecosystem for cryptocurrency mining'}
            </Global.Header2>
          </Local.LandingTitle>
          <Local.LandingTagline>
            <Global.Header5>
              {'Blinkhash\'s goal is to make mining pool ownership accessible for the layman. Click the links below to get started.'}
            </Global.Header5>
          </Local.LandingTagline>
          <Local.LandingButtons>
            <ButtonInternal
              link={'/docs/foundation'}
              text={'Foundation'}
            />
            <ButtonDisabled
              text={'Platform'}
            />
          </Local.LandingButtons>
        </Local.LandingEntry>
      </Local.LandingInner>
    </Local.LandingContainer>
  );
}
