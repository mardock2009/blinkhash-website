/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonInternal } from '../Button/index';
import Divider from '../Divider/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';


export default function Starting(props) {
  return (
    <Local.StartingContainer
      style={{ backgroundImage: `url(${'/docs/images/footer-background.png'})`}}
    >
      <Local.StartingInner>
        <Local.StartingTitle>
          <Global.Header1>
            {"Get Started with Blinkhash"}
          </Global.Header1>
        </Local.StartingTitle>
        <ButtonInternal
          link={'/docs/foundation'}
          text={'Explore Documentation'}
        />
      </Local.StartingInner>
    </Local.StartingContainer>
  );
}
