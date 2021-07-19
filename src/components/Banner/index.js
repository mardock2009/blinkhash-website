/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LinkInternal } from '../Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Banner() {
  const router = useRouter();
  const [slider, updateSlider] = useState(false);
  const [page,] = useState(router.pathname);

  return (
    <Local.BannerMain>
      <Local.BannerInner>
        <Local.BannerTitle slider={slider}>
          <Local.BannerSlider>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: '16px' }}
              onClick={updateSlider.bind(this, !slider)}
            />
          </Local.BannerSlider>
          <Global.Header1>{'Blinkhash Core v1'}</Global.Header1>
        </Local.BannerTitle>
        <Local.BannerSelect>
          <LinkInternal link={'/overview'}>
            <Local.BannerSelectItem
              slider={slider}
              active={['/', '/overview'].includes(page)}
            >
              <Global.Header3>{'Overview'}</Global.Header3>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/configurations'}>
            <Local.BannerSelectItem
              slider={slider}
              active={['/configurations'].includes(page)}
            >
              <Global.Header3>{'Configurations'}</Global.Header3>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/endpoints'}>
            <Local.BannerSelectItem
              slider={slider}
              active={['/endpoints'].includes(page)}
            >
              <Global.Header3>{'Endpoints'}</Global.Header3>
            </Local.BannerSelectItem>
          </LinkInternal>
        </Local.BannerSelect>
      </Local.BannerInner>
    </Local.BannerMain>
  );
}
