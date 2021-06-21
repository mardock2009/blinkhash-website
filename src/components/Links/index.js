import * as Local from './styles';

export function LinkInternal(props) {
  return (
    <Local.LinkInternal to={props.link}>
      {props.children}
    </Local.LinkInternal>
  );
}

export function LinkExternal(props) {
  return (
    <Local.LinkExternal
      href={props.link}
      target='_blank'
      rel='noreferrer noopener'
    >
      {props.children}
    </Local.LinkExternal>
  );
}
