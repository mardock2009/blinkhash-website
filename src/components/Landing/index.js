/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonInternal } from '../Button/index';
import Waves from '../Waves/index';

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
              {"Blinkhash is an expansive, open-source platform for cryptocurrency mining pools"}
            </Global.Header1>
          </Local.LandingTitle>
          <Local.LandingTagline>
            <Global.Header2>
              {"Blinkhash makes mining pool ownership accessible for the masses. Click the links below to get started."}
            </Global.Header2>
          </Local.LandingTagline>
          <Local.LandingButtons>
            <ButtonInternal
              link={'/docs/foundation'}
              text={'Foundation Docs'}
            />
          </Local.LandingButtons>
        </Local.LandingEntry>
        {(props.theme === 'light') ? (
          <Local.LandingImage
            width='480px'
            src={'/images/blinkhash-isometric-light.svg'}
            alt=''
          />
        ) : (
          <Local.LandingImage
            width='480px'
            src={'/images/blinkhash-isometric-dark.svg'}
            alt=''
          />
        )}
      </Local.LandingInner>
      <Waves theme={props.theme} />
    </Local.LandingContainer>
  );
}
