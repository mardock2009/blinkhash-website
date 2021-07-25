/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import * as Local from './styles';

export default function Waves(props) {
  return (
    <Local.WavesContainer>
      {(props.theme === 'light') ? (
        <React.Fragment>
          <Local.WavesPrimary
            style={{ backgroundImage: "url('/images/blinkhash-wave-light.png')"}}
          />
          <Local.WavesSecondary
            style={{ backgroundImage: "url('/images/blinkhash-wave-light.png')"}}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Local.WavesPrimary
            style={{ backgroundImage: "url('/images/blinkhash-wave-dark.png')"}}
          />
          <Local.WavesSecondary
            style={{ backgroundImage: "url('/images/blinkhash-wave-dark.png')"}}
          />
        </React.Fragment>
      )}
    </Local.WavesContainer>
  );
}
