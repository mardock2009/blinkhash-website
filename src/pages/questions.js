import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/questions';
import { Global } from '../styles';

export default function Questions(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        location={'Questions'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
