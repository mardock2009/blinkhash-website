import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import * as Local from './styles';

export default function Tutorials(props) {
  return (
    <Local.TutorialsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner />
    </Local.TutorialsMain>
  );
}
