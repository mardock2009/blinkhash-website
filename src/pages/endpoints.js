import React from 'react';
import Section from '../components/Section/index';
import { headers, sections } from '../text/endpoints';
import { Global } from '../styles';

export default function Endpoints(props) {
  return (
    <React.Fragment>
      <Global />
      <Section
        location={'Endpoints'}
        headers={headers}
        sections={sections}
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
    </React.Fragment>
  );
}
