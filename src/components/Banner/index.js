/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LinkInternal } from '../Links';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Banner() {
  const router = useRouter();
  const [page,] = useState(router.pathname);

  return (
    <Local.BannerMain>
      <Local.BannerInner>
        <Local.BannerTitle>
          <Global.Header3>{'Blinkhash Core v1'}</Global.Header3>
        </Local.BannerTitle>
        <Local.BannerSelect>
          <LinkInternal link={'/overview'}>
            <Local.BannerSelectItem active={['/', '/overview'].includes(page)}>
              <Global.Header4>{'Overview'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/configurations'}>
            <Local.BannerSelectItem active={['/configurations'].includes(page)}>
              <Global.Header4>{'Configurations'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/endpoints'}>
            <Local.BannerSelectItem active={['/endpoints'].includes(page)}>
              <Global.Header4>{'Endpoints'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/questions'}>
            <Local.BannerSelectItem active={['/questions'].includes(page)}>
              <Global.Header4>{'FAQs'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
        </Local.BannerSelect>
      </Local.BannerInner>
    </Local.BannerMain>
  );
}
