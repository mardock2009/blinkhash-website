import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import Information from '../../components/Information/index';
import Sidenav from '../../components/Sidenav/index';
import * as Local from './styles';

export default function Tutorials(props) {
  return (
    <Local.TutorialsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Local.TutorialsInner>
        <Banner />
        <Local.TutorialsInformation>
          <Sidenav />
          <Information
            location={'Tutorials'}
          />
        </Local.TutorialsInformation>
      </Local.TutorialsInner>
    </Local.TutorialsMain>
  );
}
