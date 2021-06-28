import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/configurations';
import { Global } from '../styles';

export default function Configurations(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        location={'Configurations'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
