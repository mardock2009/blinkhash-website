/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { simple, profitable, secure, active } from '../../../text/landing/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Attributes(props) {
  return (
    <Local.AttributesContainer>
      <Local.AttributesInner>
        <Local.AttributesSection>
          <Local.AttributesImage
            src={(props.theme === 'light') ?
              '/images/blinkhash-feature1-light.png' :
              '/images/blinkhash-feature1-dark.png'}
            alt=''
          />
          <Local.AttributesTitle>
            <Global.Header4>
              {"Simple"}
            </Global.Header4>
          </Local.AttributesTitle>
          <Local.AttributesText>
            <Global.Body2>
              {simple}
            </Global.Body2>
          </Local.AttributesText>
        </Local.AttributesSection>
        <Local.AttributesSection>
          <Local.AttributesImage
            src={(props.theme === 'light') ?
              '/images/blinkhash-feature2-light.png' :
              '/images/blinkhash-feature2-dark.png'}
            alt=''
          />
          <Local.AttributesTitle>
            <Global.Header4>
              {"Profitable"}
            </Global.Header4>
          </Local.AttributesTitle>
          <Local.AttributesText>
            <Global.Body2>
              {profitable}
            </Global.Body2>
          </Local.AttributesText>
        </Local.AttributesSection>
        <Local.AttributesSection>
          <Local.AttributesImage
            src={(props.theme === 'light') ?
              '/images/blinkhash-feature3-light.png' :
              '/images/blinkhash-feature3-dark.png'}
            alt=''
          />
          <Local.AttributesTitle>
            <Global.Header4>
              {"Secure"}
            </Global.Header4>
          </Local.AttributesTitle>
          <Local.AttributesText>
            <Global.Body2>
              {secure}
            </Global.Body2>
          </Local.AttributesText>
        </Local.AttributesSection>
        <Local.AttributesSection>
          <Local.AttributesImage
            src={(props.theme === 'light') ?
              '/images/blinkhash-feature4-light.png' :
              '/images/blinkhash-feature4-dark.png'}
            alt=''
          />
          <Local.AttributesTitle>
            <Global.Header4>
              {"Active"}
            </Global.Header4>
          </Local.AttributesTitle>
          <Local.AttributesText>
            <Global.Body2>
              {active}
            </Global.Body2>
          </Local.AttributesText>
        </Local.AttributesSection>
      </Local.AttributesInner>
    </Local.AttributesContainer>
  );
}
