import React, { useEffect, useState } from 'react';
import { SearchContext } from '../../App';
import logo from './../../assets/img/search.svg';
import style from './Search.module.sass';
const Search = () => {
  const { searchData, setSearchData } = React.useContext(SearchContext);
  return (
    <div className={style.search}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Поиск пиццы..."
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <img src={logo} alt="" className={style.logo} />
    </div>
  );
};
export default Search;
