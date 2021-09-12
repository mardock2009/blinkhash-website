/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonInternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';


export default function Starting() {
  return (
    <Local.StartingContainer>
      <Local.StartingInner>
        <Local.StartingSection>
          <Local.StartingTitle>
            <Local.StartingTitleMain>
              <Global.Header2>
                {'Get Started with'}
              </Global.Header2>
            </Local.StartingTitleMain>
            <Local.StartingTitleBold>
              <Global.Header2 bold>
                {'Blinkhash'}
              </Global.Header2>
            </Local.StartingTitleBold>
          </Local.StartingTitle>
          <Local.StartingButtons>
            <Local.StartingLink>
              <ButtonInternal
                link={'/'}
                text={'Access the Mining Pool'}
              />
            </Local.StartingLink>
            <Local.StartingLink>
              <ButtonInternal
                link={'/foundation'}
                text={'Explore Documentation'}
              />
            </Local.StartingLink>
          </Local.StartingButtons>
        </Local.StartingSection>
      </Local.StartingInner>
    </Local.StartingContainer>
  );
}
