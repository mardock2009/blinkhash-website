import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import * as Local from './styles';

export default function Questions(props) {
  return (
    <Local.QuestionsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner />
    </Local.QuestionsMain>
  );
}
