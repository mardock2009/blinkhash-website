/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { mission } from '../../../text/landing/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Mission() {
  return (
    <Local.MissionContainer>
      <Local.MissionInner>
        <Local.MissionSection>
          <Local.MissionInformation>
            <Local.MissionTitle>
              <Local.MissionTitleMain>
                <Global.Header3>
                  {'Our'}
                </Global.Header3>
              </Local.MissionTitleMain>
              <Local.MissionTitleBold>
                <Global.Header3 bold>
                  {'Mission'}
                </Global.Header3>
              </Local.MissionTitleBold>
            </Local.MissionTitle>
            <Local.MissionText>
              <Global.Body1>
                {mission}
              </Global.Body1>
            </Local.MissionText>
          </Local.MissionInformation>
         </Local.MissionSection>
      </Local.MissionInner>
    </Local.MissionContainer>
  );
}
