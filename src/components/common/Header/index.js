/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkInternal } from '../Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Header(props) {
  return (
    <Local.HeaderContainer>
      <Local.HeaderInner>
        <Local.HeaderLogo>
          <Local.HeaderImage
            width='25px'
            src={'/images/blinkhash-logo.png'}
            alt=''
          />
          <Local.HeaderTitle>
            <LinkInternal link={'/'}>
              <Global.Header4>{'Blinkhash Mining'}</Global.Header4>
            </LinkInternal>
          </Local.HeaderTitle>
        </Local.HeaderLogo>
        <Local.HeaderLinks>
          <Local.HeaderPages>
            <LinkInternal link={'/'}>
              <Local.HeaderText>
                <Global.Body2>{'Mining'}</Global.Body2>
              </Local.HeaderText>
            </LinkInternal>
            <LinkInternal link={'/'}>
              <Local.HeaderText>
                <Global.Body2>{'Partners'}</Global.Body2>
              </Local.HeaderText>
            </LinkInternal>
            <LinkInternal link={'/docs'}>
              <Local.HeaderText>
                <Global.Body2>{'Documentation'}</Global.Body2>
              </Local.HeaderText>
            </LinkInternal>
          </Local.HeaderPages>
          <Local.HeaderSocial>
            <Local.HeaderSocialIcon
              href={'https://discord.gg/8xtHZFKJQY'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ width: '20px', marginTop: '4px' }}
              />
            </Local.HeaderSocialIcon>
            <Local.HeaderSocialIcon
              href={'https://twitter.com/blinkhash1'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ width: '22px', marginTop: '2px' }}
              />
            </Local.HeaderSocialIcon>
            <Local.HeaderSocialIcon
              href={'https://www.github.com/blinkhash'}
              target='_blank'
              rel='noreferrer noopener'
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: '22px', marginTop: '1px' }}
              />
            </Local.HeaderSocialIcon>
          </Local.HeaderSocial>
          <Local.HeaderOther>
            <Local.HeaderPayout>
              <Local.HeaderText>
                <Global.Body2>{'Next Payout - Updating ...'}</Global.Body2>
              </Local.HeaderText>
            </Local.HeaderPayout>
            <Local.HeaderToggle onClick={props.toggleTheme}>
              <FontAwesomeIcon
                icon={(props.theme === 'light') ? faSun : faMoon}
                style={{ width: '22px', marginTop: '1px' }}
              />
            </Local.HeaderToggle>
            <Local.HeaderDropdown>
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: '18px', marginTop: '2px' }}
              />
            </Local.HeaderDropdown>
          </Local.HeaderOther>
        </Local.HeaderLinks>
      </Local.HeaderInner>
    </Local.HeaderContainer>
  );
}
