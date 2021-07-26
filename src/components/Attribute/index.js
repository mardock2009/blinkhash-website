/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonInternal } from '../Button/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

/* eslint no-unused-vars: ["error", { "args": "none" }] */
export default function Attribute(props) {

    // Render Component Data
    return (
      <Local.AttributeMain>
        <Local.AttributeIcon>
          <Local.AttributeIconInner>
            <FontAwesomeIcon
              icon={props.icon}
              style={{ width: '64px' }}
            />
          </Local.AttributeIconInner>
        </Local.AttributeIcon>
        <Local.AttributeContent>
          <Local.AttributeTitle>
            <Global.Header2>{props.title}</Global.Header2>
          </Local.AttributeTitle>
          <Local.AttributeText>
            <Global.Body1>
              <ReactMarkdown>
                {props.text}
              </ReactMarkdown>
            </Global.Body1>
          </Local.AttributeText>
          <Local.AttributeButtons>
            {props.children}
          </Local.AttributeButtons>
        </Local.AttributeContent>
      </Local.AttributeMain>
    )
}
