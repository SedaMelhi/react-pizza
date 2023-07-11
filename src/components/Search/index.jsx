import { useRef, useContext } from 'react';
import { SearchContext } from '../../App';
import logo from './../../assets/img/search.svg';
import close from './../../assets/img/close.svg';
import style from './Search.module.sass';
const Search = () => {
  const { searchData, setSearchData } = useContext(SearchContext);
  const inputRef = useRef();

  const handleClearInput = () => {
    setSearchData('');
    inputRef.current.focus();
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        ref={inputRef}
        className={style.searchInput}
        placeholder="Поиск пиццы..."
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <img src={close} alt="" className={style.close} onClick={handleClearInput} />
      <img src={logo} alt="" className={style.logo} />
    </div>
  );
};
export default Search;
