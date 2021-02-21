import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createEmptyArray } from "utils/utils";
import * as UTIL from "utils/searchUtil";
import * as API from "services/Loaders";
import * as S from "./styles";
import * as Card from "components/Cards";
import * as UI from "components/UIComponents";
import { MEDIA_TYPES } from "utils/constants";

const SearchPage = () => {
  const itemsPerPage = 20;
  const history = useHistory();
  const [searchedList, setSearchedList] = useState(
    createEmptyArray(itemsPerPage)
  );
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState(null);

  const loadData = async (params) => {
    const response = await API.loadSearchedKeyword(params);

    setSearchedList(response?.results || []);
    setTotalItems(response?.total_results || 0);
  };

  const updateParams = (page, searched) => {
    setParams((params) => ({
      ...params,
      page,
      query: searched,
    }));
  };

  useEffect(() => {
    return params && loadData(params);
  }, [params]);

  useEffect(() => {
    const searched = UTIL.getSearchParam(history);
    return updateParams(page, searched);
  }, [page, history, history.location]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {searchedList?.length ? "Search" : "No results found"}
        </S.Title>

        <S.FlexContainer style={{ minHeight: "70vh" }}>
          {searchedList?.map((searchItem, index) => (
            <S.FlexItem
              lg={2}
              xs={12}
              margin='15px'
              key={`searchPreview-${searchItem?.id || index}`}
            >
              {searchItem?.media_type === MEDIA_TYPES.PERSON ? (
                <Card.PersonPreview preview={searchItem} showPopularity />
              ) : (
                <Card.MediaPreview preview={searchItem} showVoteAverage />
              )}
            </S.FlexItem>
          ))}
        </S.FlexContainer>

        <UI.Pagination
          itemsPerPage={itemsPerPage}
          initialPage={page}
          setCurrentPage={setPage}
          totalItems={totalItems}
        />
      </S.Content>
    </S.Container>
  );
};

export default SearchPage;
