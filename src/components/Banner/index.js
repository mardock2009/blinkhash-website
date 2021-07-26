/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LinkInternal } from '../Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Banner(props) {
  const router = useRouter();
  const [slider, updateSlider] = useState(false);
  const [path,] = useState(router.pathname);

  function formatText(page) {
    const splitPage = page.split('/');
    const output = splitPage[splitPage.length - 1];
    return output.charAt(0).toUpperCase() + output.slice(1);
  }

  return (
    <Local.BannerContainer>
      <Local.BannerInner>
        <Local.BannerTitle slider={slider}>
          <Local.BannerSlider>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: '16px' }}
              onClick={updateSlider.bind(this, !slider)}
            />
          </Local.BannerSlider>
          <Global.Header3>
            {`${formatText(props.component)} Core v1`}
          </Global.Header3>
        </Local.BannerTitle>
        <Local.BannerSelect>
          {(props.pages.map((page, idx) => {
            return (
              <LinkInternal key={idx} link={page}>
                <Local.BannerSelectItem
                  slider={slider}
                  active={(idx === 0) ? (
                    [`/`, props.component, page].includes(path)) : (
                    [page].includes(path))
                  }
                >
                  <Global.Header6>{formatText(page)}</Global.Header6>
                </Local.BannerSelectItem>
              </LinkInternal>
            )
          }))}
        </Local.BannerSelect>
      </Local.BannerInner>
    </Local.BannerContainer>
  );
}
