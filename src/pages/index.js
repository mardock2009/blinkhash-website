import React from 'react';

// Main Components
import Building from '../components/Building/index';
import Community from '../components/Community/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import Landing from '../components/Landing/index';
import News from '../components/News/index';
import Starting from '../components/Starting/index';

import {
  DividerLight,
  DividerDark,
} from '../components/Divider/index';

// Main Styles
import { Global } from '../styles';

export default function Index(props) {
  return (
    <React.Fragment>
      <Global />
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Landing />
      <DividerLight theme={props.theme} />
      <Building />
      <DividerDark theme={props.theme} />
      <News />
      <DividerLight theme={props.theme} />
      <Community theme={props.theme} />
      <DividerDark theme={props.theme} />
      <Starting />
      <Footer />
    </React.Fragment>
  );
}
