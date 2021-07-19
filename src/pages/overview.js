import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/overview.js';
import { Global } from '../styles';

export default function Overview(props) {
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
