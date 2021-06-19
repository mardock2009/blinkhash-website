import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import Information from '../../components/Information/index';
import Sidenav from '../../components/Sidenav/index';
import * as Local from './styles';

export default function Questions(props) {
  return (
    <Local.QuestionsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Local.QuestionsInner>
        <Banner />
        <Local.QuestionsInformation>
          <Sidenav />
          <Information
            location={'FAQs'}
          />
        </Local.QuestionsInformation>
      </Local.QuestionsInner>
    </Local.QuestionsMain>
  );
}
