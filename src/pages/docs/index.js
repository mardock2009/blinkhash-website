import React from 'react';

// Main Components
import Building from '../../components/docs/Building/index';
import Community from '../../components/common/Community/index';
import Footer from '../../components/common/Footer/index';
import Header from '../../components/common/Header/index';
import Landing from '../../components/docs/Landing/index';
import News from '../../components/common/News/index';
import Starting from '../../components/common/Starting/index';

import {
  DividerLight,
  DividerDark
} from '../../components/common/Divider/index';

// Main Styles
import { Global } from '../../styles';

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
