import React from 'react';

// Main Components
import Banner from '../../components/Banner/index';
import Building from '../../components/Building/index';
import Community from '../../components/Community/index';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Landing from '../../components/Landing/index';
import News from '../../components/News/index';
import Starting from '../../components/Starting/index';

// Main Styles
import { Global } from '../../styles';

export default function Overview(props) {
  return (
    <React.Fragment>
      <Global />
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner
        component={"blinkhash"}
        pages={['/overview', '/foundation']}
      />
      <Landing theme={props.theme} />
      <Building />
      <News />
      <Community theme={props.theme} />
      <Starting />
      <Footer />
    </React.Fragment>
  );
}
