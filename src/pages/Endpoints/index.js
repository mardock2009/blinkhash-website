import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import * as Local from './styles';

export default function Endpoints(props) {
  return (
    <Local.EndpointsMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner />
    </Local.EndpointsMain>
  );
}
