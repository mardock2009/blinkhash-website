import * as Local from './styles';

export default function Sidenav(props) {
  return (
    <Local.SidenavMain>
      <Local.SidenavInner>
        {props.children}
      </Local.SidenavInner>
    </Local.SidenavMain>
  );
}
