import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/tutorials';
import { Global } from '../styles';

export default function Tutorials(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        location={'Tutorials'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
