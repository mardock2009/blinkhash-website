/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Local from './styles';

export default function Divider(props) {
  return (
    <React.Fragment>
      {(props.theme === 'light') ? (
        <Local.DividerContainer
          style={{
            backgroundImage: (props.gray) ? (
              "url('/docs/images/blinkhash-divider-light-gray.png')") : (
              "url('/docs/images/blinkhash-divider-light.png')"),
            transform: (props.rotation) ? 'rotate(180deg)' : '',
            marginTop: (props.rotation) ? '-4px': '',
          }}
        />
      ) : (
        <Local.DividerContainer
          style={{
            backgroundImage: "url('/docs/images/blinkhash-divider-dark.png')",
            transform: (props.rotation) ? 'rotate(180deg)' : '',
            marginTop: (props.rotation) ? '-4px': '',
          }}
        />
      )}
    </React.Fragment>
  );
}
