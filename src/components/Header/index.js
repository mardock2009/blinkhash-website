/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkInternal } from '../Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Header(props) {
  return (
    <Local.HeaderMain>
      <Local.HeaderInner>
        <Local.HeaderLogo>
          <Local.HeaderImage
            width='25px'
            src={'/images/blinkhash-logo.png'}
            alt=''
          />
          <Local.HeaderTitle>
            <Global.Header1>{'Blinkhash Mining'}</Global.Header1>
          </Local.HeaderTitle>
        </Local.HeaderLogo>
        <Local.HeaderLinks>
          <Local.HeaderPages>
            <LinkInternal link={'/'}>
              <Local.HeaderText>
                <Global.Body1>{'Documentation'}</Global.Body1>
              </Local.HeaderText>
            </LinkInternal>
          </Local.HeaderPages>
          <Local.HeaderSocial>
            <Local.HeaderSocialIcon
              href={'https://discord.gg/8xtHZFKJQY'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Local.Discord />
            </Local.HeaderSocialIcon>
            <Local.HeaderSocialIcon
              href={'https://www.medium.com/@blinkhash'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Local.Medium />
            </Local.HeaderSocialIcon>
            <Local.HeaderSocialIcon
              href={'https://www.github.com/blinkhash'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Local.Github />
            </Local.HeaderSocialIcon>
          </Local.HeaderSocial>
          <Local.HeaderTheme>
            <Local.HeaderToggle onClick={props.toggleTheme}>
              <FontAwesomeIcon
                icon={(props.theme === 'light') ? faSun : faMoon}
                style={{ width: '20px' }}
              />
            </Local.HeaderToggle>
          </Local.HeaderTheme>
        </Local.HeaderLinks>
      </Local.HeaderInner>
    </Local.HeaderMain>
  );
}
