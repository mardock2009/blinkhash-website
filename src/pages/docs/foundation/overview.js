import React from 'react';
import { headers, sections, resources } from '../../../text/docs/foundation/overview';

// Main Components
import Directory from '../../../components/docs/Directory/index';
import Header from '../../../components/common/Header/index';
import Section from '../../../components/docs/Section/index';

// Main Styles
import { Global } from '../../../styles';

export default function Overview(props) {
  return (
    <React.Fragment>
      <Global />
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Directory
        component={'/docs/foundation'}
        pages={[
          '/docs/foundation/overview',
          '/docs/foundation/configurations',
          '/docs/foundation/endpoints'
        ]}
        theme={props.theme}
      />
      <Section
        component={'/docs/foundation'}
        headers={headers}
        pages={[
          '/docs/foundation/overview',
          '/docs/foundation/configurations',
          '/docs/foundation/endpoints'
        ]}
        resources={resources}
        sections={sections}
        theme={props.theme}
      />
    </React.Fragment>
  );
}
