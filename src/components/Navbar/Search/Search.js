import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateUrlParamByKey } from "../../../utils/utils";
import { URL_PARAMS } from "../../../utils/constants";
import { resetPaginationUrl } from "../../../utils/paginationUtil";
import * as S from "./styles";

const Search = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (keyword) {
      resetPaginationUrl(history);

      const url = `/search`;
      let params = "";

      params = updateUrlParamByKey(
        history.location.search,
        URL_PARAMS.SEARCH,
        keyword
      );

      history.push(`${url}${params}`);
    }
  };

  const toggleVisibility = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <S.Form isVisible={isVisible} onSubmit={handleSubmit}>
      <S.Input
        type='search'
        placeholder='Search'
        isVisible={isVisible}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <S.Button isVisible={isVisible} type='submit' onClick={toggleVisibility}>
        <S.Icon isVisible={isVisible} className='fas fa-search' />
      </S.Button>
    </S.Form>
  );
};

export default Search;
