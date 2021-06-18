import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import * as Local from './styles';

export default function Overview(props) {
  return (
    <Local.OverviewMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner />
    </Local.OverviewMain>
  );
}
