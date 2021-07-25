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
          <Global.Header2>
            {`${formatText(props.component)} Core v1`}
          </Global.Header2>
        </Local.BannerTitle>
        <Local.BannerSelect>
          {(props.pages.map((page, idx) => {
            return (
              <LinkInternal key={idx} link={`/docs${page}`}>
                <Local.BannerSelectItem
                  slider={slider}
                  active={(idx === 0) ? (
                    [`/docs`, `/docs${props.component}`, `/docs${page}`].includes(path)) : (
                    [`/docs${page}`].includes(path))
                  }
                >
                  <Global.Header4>{formatText(page)}</Global.Header4>
                </Local.BannerSelectItem>
              </LinkInternal>
            )
          }))}
        </Local.BannerSelect>
      </Local.BannerInner>
    </Local.BannerContainer>
  );
}
