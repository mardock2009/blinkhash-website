import * as Global from '../../styles';
import * as Local from './styles';

export function LinkInternal(props) {
  return (
    <Local.HeaderLinkInternal to={props.link}>
      <Global.Body>{props.text}</Global.Body>
    </Local.HeaderLinkInternal>
  );
}

export function LinkExternal(props) {
  return (
    <Local.HeaderLinkExternal
      href={props.link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Global.Body>{props.text}</Global.Body>
    </Local.HeaderLinkExternal>
  );
}

export function LinkModal(props) {
  return (
    <Local.HeaderLinkExternal onClick={props.link}>
      <Global.Body>{props.text}</Global.Body>
    </Local.HeaderLinkExternal>
  );
}
