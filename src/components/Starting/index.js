/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Attribute from '../Attribute/index';
import Horizontal from '../Horizontal/index';
import { ButtonDisabled, ButtonInternal } from '../Button/index';
import { faDesktop, faHdd } from '@fortawesome/free-solid-svg-icons'

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

const independent = `
The best place to start is the documentation for Foundation, our open-source mining pool
solution. It's important to become familiar with the software being utilized in order to
become a more effective pool operator. Look for the 'Getting Started' section for a tutorial
on how to build a simple Bitcoin pool.
`;

const platform = `
`;

export default function Starting(props) {
  return (
    <Local.StartingContainer>
      <Local.StartingOptions>
        <Attribute
          icon={faHdd}
          title={'Building Independently'}
          text={independent}
        >
          <ButtonInternal
            link={'/docs/foundation'}
            text={'Foundation Docs'}
          />
        </Attribute>
        <Attribute
          icon={faDesktop}
          title={'Building on the Platform'}
          text={platform}
        >
          <ButtonDisabled
            link={''}
            text={'Coming Soon'}
          />
        </Attribute>
      </Local.StartingOptions>
      <Horizontal />
    </Local.StartingContainer>
  );
}
