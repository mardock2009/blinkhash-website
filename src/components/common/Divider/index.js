/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Local from './styles';

export function DividerLight() {

  return (
    <React.Fragment>
      <Local.DividerLightPrimary />
      <Local.DividerLightSecondary />
    </React.Fragment>
  );
}

export function DividerDark() {
  return (
    <React.Fragment>
      <Local.DividerDarkPrimary />
      <Local.DividerDarkSecondary />
    </React.Fragment>
  );
}

export function DividerGrey() {
  return (
    <React.Fragment>
      <Local.DividerGreyPrimary />
      <Local.DividerGreySecondary />
    </React.Fragment>
  );
}
