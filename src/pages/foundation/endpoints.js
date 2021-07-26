import React from 'react';
import Header from '../../components/Header/index';
import Section from '../../components/Section/index';
import { headers, sections, resources } from '../../text/foundation/endpoints.js';

// Main Styles
import { Global } from '../../styles';

export default function Configuration(props) {
  return (
    <React.Fragment>
      <Global />
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Section
        component={"/foundation"}
        headers={headers}
        pages={[
          "/foundation/overview",
          "/foundation/configurations",
          "/foundation/endpoints"
        ]}
        resources={resources}
        sections={sections}
        theme={props.theme}
      />
    </React.Fragment>
  );
}
