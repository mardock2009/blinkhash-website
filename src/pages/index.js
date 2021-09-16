import React from 'react';

// Main Components
import Attributes from '../components/landing/Attributes/index';
import Building from '../components/landing/Building/index';
import Community from '../components/common/Community/index';
import Footer from '../components/common/Footer/index';
import Header from '../components/common/Header/index';
import Landing from '../components/landing/Landing/index';
import Mining from '../components/landing/Mining/index';
import Mission from '../components/landing/Mission/index';
import News from '../components/common/News/index';
import Partners from '../components/landing/Partners/index';
import Starting from '../components/common/Starting/index';

import {
  DividerLight,
  DividerDark,
} from '../components/common/Divider/index';

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
      <Mining />
      <DividerDark theme={props.theme} />
      <Mission />
      <DividerLight theme={props.theme} />
      <Attributes theme={props.theme} />
      <DividerDark theme={props.theme} />
      <Building />
      <DividerLight theme={props.theme} />
      <Partners />
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
