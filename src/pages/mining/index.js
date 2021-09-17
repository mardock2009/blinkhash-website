import React from 'react';

// Main Components
import Footer from '../../components/common/Footer/index';
import Header from '../../components/common/Header/index';
import Directory from '../../components/mining/Directory/index';

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
      <Directory theme={props.theme} />
      <DividerLight theme={props.theme} />
      <Footer />
    </React.Fragment>
  );
}
