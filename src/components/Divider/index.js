/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Local from './styles';

export default function Divider(props) {
  return (
    <Local.DividerContainer>
      {(props.theme === 'light') ? (
        <React.Fragment>
          <Local.DividerPrimary
            style={{ backgroundImage: "url('/images/blinkhash-divider-light.svg')"}}
          />
          <Local.DividerSecondary
            style={{ backgroundImage: "url('/images/blinkhash-divider-light.svg')"}}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Local.DividerPrimary
            style={{ backgroundImage: "url('/images/blinkhash-divider-dark.svg')"}}
          />
          <Local.DividerSecondary
            style={{ backgroundImage: "url('/images/blinkhash-divider-dark.svg')"}}
          />
        </React.Fragment>
      )}
    </Local.DividerContainer>
  );
}
