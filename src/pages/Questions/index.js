import Section from '../../components/Section/index';
import { headers, sections } from '../../text/questions';
import * as Local from './styles';

export default function Questions(props) {
  return (
    <Local.QuestionsMain>
      <Section
        location={'Questions'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </Local.QuestionsMain>
  );
}
