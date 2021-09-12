/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonDisabled, ButtonInternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

const independent = `
The documentation for Foundation, our open-source mining pool solution, provides the best
starting point. It's important to become familiar with the software being utilized in order to
become a more effective pool operator. Look for the 'Getting Started' section for a tutorial
on how to build a simple Bitcoin pool.
`;

const platform = `
Our proprietary turnkey mining pool platform allows users to create their own mining pools
with the push of a button. If you're looking to create a mining pool for one of our supported
coins quickly without having to deal with setting up the infrastructure, just create an account
and get started.
`;

export default function Building() {
  return (
    <Local.BuildingContainer>
      <Local.BuildingInner>
        <Local.BuildingSection>
          <Local.BuildingImage
            style={{ paddingRight: '50px' }}
            src={'/docs/images/blinkhash-independent.png'}
            alt=''
          />
          <Local.BuildingInformation>
            <Local.BuildingTitle>
              <Local.BuildingTitleMain>
                <Global.Header2>
                  {'Building'}
                </Global.Header2>
              </Local.BuildingTitleMain>
              <Local.BuildingTitleBold>
                <Global.Header2 bold>
                  {'Independently'}
                </Global.Header2>
              </Local.BuildingTitleBold>
            </Local.BuildingTitle>
            <Local.BuildingText>
              <Global.Body1>
                {independent}
              </Global.Body1>
            </Local.BuildingText>
            <Local.BuildingLink>
              <ButtonInternal
                link={'/foundation'}
                text={'Foundation'}
              />
            </Local.BuildingLink>
          </Local.BuildingInformation>
        </Local.BuildingSection>
        <Local.BuildingSection>
          <Local.BuildingInformation>
            <Local.BuildingTitle>
              <Local.BuildingTitleMain>
                <Global.Header2>
                  {'Building on the'}
                </Global.Header2>
              </Local.BuildingTitleMain>
              <Local.BuildingTitleBold>
                <Global.Header2 bold>
                  {'Platform'}
                </Global.Header2>
              </Local.BuildingTitleBold>
            </Local.BuildingTitle>
            <Local.BuildingText>
              <Global.Body1>
                {platform}
              </Global.Body1>
            </Local.BuildingText>
            <Local.BuildingLink>
              <ButtonDisabled
                link={''}
                text={'Coming Soon'}
              />
            </Local.BuildingLink>
          </Local.BuildingInformation>
          <Local.BuildingImage
            style={{ paddingLeft: '50px' }}
            src={'/docs/images/blinkhash-platform.png'}
            alt=''
          />
        </Local.BuildingSection>
      </Local.BuildingInner>
    </Local.BuildingContainer>
  );
}
