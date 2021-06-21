import Section from '../../components/Section/index';
import { headers, sections } from '../../text/endpoints';
import * as Local from './styles';

export default function Endpoints(props) {
  return (
    <Local.EndpointsMain>
      <Section
        location={'Endpoints'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </Local.EndpointsMain>
  );
}
