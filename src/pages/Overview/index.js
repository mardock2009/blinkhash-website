import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import Information from '../../components/Information/index';
import Sidenav from '../../components/Sidenav/index';
import * as Local from './styles';

export default function Overview(props) {
  return (
    <Local.OverviewMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Local.OverviewInner>
        <Banner />
        <Local.OverviewInformation>
          <Sidenav />
          <Information
            location={'Overview'}
          />
        </Local.OverviewInformation>
      </Local.OverviewInner>
    </Local.OverviewMain>
  );
}
