/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../../common/Button/index';
import { browse, create } from '../../../text/landing/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Building() {
  return (
    <Local.BuildingContainer>
      <Local.BuildingInner>
        <Local.BuildingSection>
          <Local.BuildingImage
            style={{ paddingRight: '50px' }}
            src={'/images/blinkhash-independent.png'}
            alt=''
          />
          <Local.BuildingInformation>
            <Local.BuildingTitle>
              <Local.BuildingTitleMain>
                <Global.Header3>
                  {'Browse'}
                </Global.Header3>
              </Local.BuildingTitleMain>
              <Local.BuildingTitleBold>
                <Global.Header3 bold>
                  {'Mining Pools'}
                </Global.Header3>
              </Local.BuildingTitleBold>
            </Local.BuildingTitle>
            <Local.BuildingText>
              <Global.Body1>
                {browse}
              </Global.Body1>
            </Local.BuildingText>
            <Local.BuildingLink>
              <ButtonDisabled
                text={'Coming Soon'}
              />
            </Local.BuildingLink>
          </Local.BuildingInformation>
        </Local.BuildingSection>
        <Local.BuildingSection>
          <Local.BuildingInformation>
            <Local.BuildingTitle>
              <Local.BuildingTitleMain>
                <Global.Header3>
                  {'Create a'}
                </Global.Header3>
              </Local.BuildingTitleMain>
              <Local.BuildingTitleBold>
                <Global.Header3 bold>
                  {'Mining Pool'}
                </Global.Header3>
              </Local.BuildingTitleBold>
            </Local.BuildingTitle>
            <Local.BuildingText>
              <Global.Body1>
                {create}
              </Global.Body1>
            </Local.BuildingText>
            <Local.BuildingLink>
              <ButtonInternal
                link={'/docs'}
                text={'Continue'}
              />
            </Local.BuildingLink>
          </Local.BuildingInformation>
          <Local.BuildingImage
            style={{ paddingLeft: '50px' }}
            src={'/images/blinkhash-platform.png'}
            alt=''
          />
        </Local.BuildingSection>
      </Local.BuildingInner>
    </Local.BuildingContainer>
  );
}
