/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ButtonActive, ButtonPassive } from '../../common/Button/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

export default function Mining() {
  const [filter, updateFilter] = useState("featured");
  const [search, updateSearch] = useState("");
  const [currentPools, updateCurrentPools] = useState([]);
  const [filteredPools, updateFilteredPools] = useState([]);

  // Filter Only Featured Pools
  function filterFeatured() {
    const selectedFeatured = Object.assign(currentPools.filter(pool => pool.featured));
    if (selectedFeatured.length < 15) {
      Array(15 - selectedFeatured.length).fill({}).forEach(() => {
        selectedFeatured.push({});
      });
    }
    updateFilter("featured");
    updateFilteredPools(selectedFeatured);
  }

  // Filter Main Pools
  function filterMain() {
    const selectedMain = Object.assign(currentPools);
    if (selectedMain.length < 15) {
      Array(15 - selectedMain.length).fill({}).forEach(() => {
        selectedMain.push({});
      });
    }
    updateFilter("main");
    updateFilteredPools(selectedMain);
  }

  useEffect(() => {
    updateCurrentPools([]);
    updateFilteredPools(Array(15).fill({}));
  }, []);

  return (
    <Local.MiningContainer>
      <Local.MiningInner>
        <Local.MiningTable>
          <Local.MiningTableTitle>
            <Local.MiningTableTitleMain>
              <Global.Header3 bold>
                {"Active"}
              </Global.Header3>
            </Local.MiningTableTitleMain>
            <Local.MiningTableTitleBold>
              <Global.Header3>
                {"Mining Pools"}
              </Global.Header3>
            </Local.MiningTableTitleBold>
          </Local.MiningTableTitle>
          <Local.MiningTableHeader>
            <Local.MiningTableFilter>
              <Local.MiningTableButtons>
                {(filter === "featured") ? (
                  <ButtonActive
                    text={"Featured"}
                    onClick={() => filterFeatured()}
                  />
                ) : (
                  <ButtonPassive
                    text={"Featured"}
                    onClick={() => filterFeatured()}
                  />
                )}
                {(filter === "main") ? (
                  <ButtonActive
                    text={"Main"}
                    onClick={() => filterMain()}
                  />
                ) : (
                  <ButtonPassive
                    text={"Main"}
                    onClick={() => filterMain()}
                  />
                )}
              </Local.MiningTableButtons>
              <Local.MiningTableSearch>
                  <Local.MiningTableSearchIcon>
                      <FontAwesomeIcon icon={faSearch} />
                  </Local.MiningTableSearchIcon>
                  <Local.MiningTableSearchInput
                      type="text"
                      placeholder={"Search for a Coin ..."}
                      onChange={e => updateSearch(e.target.value)}
                  />
              </Local.MiningTableSearch>
            </Local.MiningTableFilter>
            <Local.MiningTablePadding />
            <Local.MiningTableColumns>
              <Local.MiningTableColumnsBody>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Coin"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Symbol"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Algorithm"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Workers"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Pool Hashrate"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Total Paid"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
                <Local.MiningTableCellHeader>
                  <Global.Body2>
                    {"Pool"}
                  </Global.Body2>
                </Local.MiningTableCellHeader>
              </Local.MiningTableColumnsBody>
            </Local.MiningTableColumns>
          </Local.MiningTableHeader>
          <Local.MiningTableContent>
            {filteredPools.map((pool, i) => (
              <Local.MiningTableColumnsRow key={i}>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.pool || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.symbol || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.algorithm || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.workers || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.hashrate || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {pool.paid || ""}
                  </Global.Body2>
                </Local.MiningTableCellContent>
                <Local.MiningTableCellContent>
                  <Global.Body2>
                    {(pool.pool) ? (
                      <React.Fragment>
                        {"Pool"}
                      </React.Fragment>
                    ) : (
                      <React.Fragment />
                    )}
                  </Global.Body2>
                </Local.MiningTableCellContent>
              </Local.MiningTableColumnsRow>
            ))}
          </Local.MiningTableContent>
        </Local.MiningTable>
      </Local.MiningInner>
    </Local.MiningContainer>
  );
}
