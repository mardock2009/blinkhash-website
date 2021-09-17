/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Directory(props) {
  const [search, updateSearch] = useState("");

  return (
    <Local.DirectoryContainer>
      <Local.DirectoryInner>
        <Local.DirectoryLinks>
          <Local.DirectoryTitle>
            <Global.Header2 bold>
              {'Blinkhash Mining'}
            </Global.Header2>
          </Local.DirectoryTitle>
          <Local.DirectorySearch>
              <Local.DirectorySearchIcon>
                  <FontAwesomeIcon icon={faSearch} />
              </Local.DirectorySearchIcon>
              <Local.DirectorySearchInput
                  type="text"
                  placeholder={"Search for a Coin ..."}
                  onChange={e => updateSearch(e.target.value)}
              />
          </Local.DirectorySearch>
        </Local.DirectoryLinks>
        <Local.DirectoryImage
          src={(props.theme === 'light') ?
            '/images/blinkhash-background-light.png' :
            '/images/blinkhash-background-dark.png'}
          alt=''
        />
      </Local.DirectoryInner>
    </Local.DirectoryContainer>
  );
}
