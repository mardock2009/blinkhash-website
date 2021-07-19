import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/endpoints.js';
import { Global } from '../styles';

export default function Configuration(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
