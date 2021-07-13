/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
          <Global.Header1>{'Blinkhash Core v1'}</Global.Header1>
        </Local.BannerTitle>
      </Local.BannerInner>
    </Local.BannerMain>
  );
}
