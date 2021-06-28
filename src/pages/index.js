import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/overview';
import { Global } from '../styles';

export default function Index(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        location={'Overview'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
