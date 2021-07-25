import React from 'react';
import Banner from '../../components/Banner/index';
import Header from '../../components/Header/index';
import Landing from '../../components/Landing/index';
import { Global } from '../../styles';

export default function Index(props) {
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
    </React.Fragment>
  );
}
