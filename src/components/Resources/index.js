/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { LinkExternal } from '../Links/index';
import * as Global from '../../styles';
import * as Local from './styles';

const githubLinks = [
  ['https://github.com/blinkhash/blinkhash-server', 'blinkhash-server'],
  ['https://github.com/blinkhash/blinkhash-stratum', 'blinkhash-stratum'],
  ['https://github.com/blinkhash/blinkhash-multi-hashing', 'blinkhash-multi-hashing'],
  ['https://github.com/blinkhash/blinkhash-documentation', 'blinkhash-documentation'],
  ['https://github.com/blinkhash/blinkhash-configurations', 'blinkhash-configurations'],
  ['https://github.com/blinkhash/blinkhash-utxo-lib', 'blinkhash-utxo-lib']]

export default function Resources() {
  return (
    <Local.ResourcesMain>
      <Local.ResourcesInner>
        <Local.ResourcesTitle>
          <Global.Header2>
            {'Resources'}
          </Global.Header2>
        </Local.ResourcesTitle>
        <Local.ResourcesSection>
          {(githubLinks.map((link, idx) => {
            return (
              <LinkExternal key={idx} link={link[0]}>
                <Global.Body1>{link[1]}</Global.Body1>
              </LinkExternal>
            )
          }))}
        </Local.ResourcesSection>
      </Local.ResourcesInner>
    </Local.ResourcesMain>
  );
}
