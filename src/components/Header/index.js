import { LinkInternal } from './modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import blinkhash from '../../assets/images/blinkhash-logo.png';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

export default function Header(props) {
  return (
    <Local.HeaderMain>
      <Local.HeaderInner>
        <Local.HeaderLogo>
          <Local.HeaderImage width='30px' src={blinkhash} alt='' />
          <Local.HeaderTitle>
            <Global.Header3>{'Blinkhash Mining'}</Global.Header3>
          </Local.HeaderTitle>
        </Local.HeaderLogo>
        <Local.HeaderLinks>
          <Local.HeaderPages>
            <LinkInternal link={'/'} text={'Documentation'} />
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
              <FontAwesomeIcon icon={(props.theme === 'light') ? faSun : faMoon} />
            </Local.HeaderToggle>
          </Local.HeaderTheme>
        </Local.HeaderLinks>
      </Local.HeaderInner>
    </Local.HeaderMain>
  );
}
