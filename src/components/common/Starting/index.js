/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../Button/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';


export default function Starting() {
  return (
    <Local.StartingContainer>
      <Local.StartingInner>
        <Local.StartingSection>
          <Local.StartingTitle>
            <Local.StartingTitleMain>
              <Global.Header3>
                {'Get Started with'}
              </Global.Header3>
            </Local.StartingTitleMain>
            <Local.StartingTitleBold>
              <Global.Header3 bold>
                {'Blinkhash'}
              </Global.Header3>
            </Local.StartingTitleBold>
          </Local.StartingTitle>
          <Local.StartingButtons>
            <Local.StartingButtonsInner>
              <Local.StartingLink>
                <ButtonDisabled
                  text={'Browse Mining Pools'}
                />
              </Local.StartingLink>
              <Local.StartingLink>
                <ButtonInternal
                  link={'/'}
                  text={'Explore Documentation'}
                />
              </Local.StartingLink>
            </Local.StartingButtonsInner>
          </Local.StartingButtons>
        </Local.StartingSection>
      </Local.StartingInner>
    </Local.StartingContainer>
  );
}
