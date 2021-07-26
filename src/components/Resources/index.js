/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkExternal } from '../Links/index';
import * as Global from '../../styles';
import * as Local from './styles';

export default function Resources(props) {
  return (
    <Local.ResourcesContainer>
      <Local.ResourcesInner>
        <Local.ResourcesTitle>
          <Global.Header5>
            {'Resources'}
          </Global.Header5>
        </Local.ResourcesTitle>
        <Local.ResourcesSection>
          {(props.resources.map((link, idx) => {
            return (
              <LinkExternal key={idx} link={link[0]}>
                <Global.Body1>{link[1]}</Global.Body1>
              </LinkExternal>
            )
          }))}
        </Local.ResourcesSection>
      </Local.ResourcesInner>
    </Local.ResourcesContainer>
  );
}
