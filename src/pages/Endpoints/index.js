import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import Information from '../../components/Information/index';
import Sidenav from '../../components/Sidenav/index';
import * as Local from './styles';

export default function Endpoints(props) {
  return (
    <Local.EndpointsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Local.EndpointsInner>
        <Banner />
        <Local.EndpointsInformation>
          <Sidenav />
          <Information
            location={'Endpoints'}
          />
        </Local.EndpointsInformation>
      </Local.EndpointsInner>
    </Local.EndpointsMain>
  );
}
