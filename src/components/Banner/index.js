/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { ButtonExternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Banner() {
  return (
    <Local.BannerContainer>
      <Local.BannerInner>
        <Local.BannerSection>
          <Local.BannerTitle>
            <Global.Header4 bold>
              {'Have a question?'}
            </Global.Header4>
          </Local.BannerTitle>
          <Local.BannerText>
            <Global.Body2>
              {'Connect with the community in the Blinkhash Discord'}
            </Global.Body2>
          </Local.BannerText>
        </Local.BannerSection>
        <ButtonExternal
          link={'https://discord.gg/8xtHZFKJQY'}
          text={'Continue'}
        />
      </Local.BannerInner>
    </Local.BannerContainer>
  );
}
