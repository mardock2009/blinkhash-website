/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkExternal } from '../Links/index';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Resources(props) {
  return (
    <Local.ResourcesContainer>
      <Local.ResourcesInner>
        <Local.ResourcesSection>
          <Local.ResourcesTitle>
            <Global.Body2 bold>
              {'Resources'}
            </Global.Body2>
          </Local.ResourcesTitle>
          {(props.resources.map((link, idx) => {
            return (
              <Local.ResourcesText key={idx}>
                <LinkExternal link={link[0]}>
                  <Global.Body2>{link[1]}</Global.Body2>
                </LinkExternal>
              </Local.ResourcesText>
            );
          }))}
        </Local.ResourcesSection>
      </Local.ResourcesInner>
    </Local.ResourcesContainer>
  );
}
