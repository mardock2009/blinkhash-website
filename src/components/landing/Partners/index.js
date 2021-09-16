/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { CardExternal } from '../../common/Card/index';
import { partners } from '../../../text/landing/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Partners() {
  return (
    <Local.PartnersContainer>
      <Local.PartnersInner>
        <Local.PartnersSection>
          <Local.PartnersTitle>
            <Local.PartnersTitleMain>
              <Global.Header3>
                {'Partners &'}
              </Global.Header3>
            </Local.PartnersTitleMain>
            <Local.PartnersTitleBold>
              <Global.Header3 bold>
                {'Clients'}
              </Global.Header3>
            </Local.PartnersTitleBold>
          </Local.PartnersTitle>
          <Local.PartnersText>
            <Global.Body1>
              {partners}
            </Global.Body1>
          </Local.PartnersText>
        </Local.PartnersSection>
      </Local.PartnersInner>
    </Local.PartnersContainer>
  );
}
