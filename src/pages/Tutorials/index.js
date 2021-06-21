import Section from '../../components/Section/index';
import { headers, sections } from '../../text/tutorials';
import * as Local from './styles';

export default function Tutorials(props) {
  return (
    <Local.TutorialsMain>
      <Section
        location={'Tutorials'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </Local.TutorialsMain>
  );
}
