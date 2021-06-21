import Section from '../../components/Section/index';
import { headers, sections } from '../../text/overview';
import * as Local from './styles';

export default function Overview(props) {
  return (
    <Local.OverviewMain>
      <Section
        location={'Overview'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </Local.OverviewMain>
  );
}
