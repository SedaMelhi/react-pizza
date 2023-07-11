import { useRef, useContext, useCallback, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import logo from './../../assets/img/search.svg';
import close from './../../assets/img/close.svg';
import style from './Search.module.sass';

const Search = () => {
  const { setSearchData } = useContext(SearchContext);
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchData(str);
    }, 500),
    [],
  );
  const handleClearInput = () => {
    setValue('');
    setSearchData('');
    inputRef.current.focus();
  };
  const onChangeData = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        ref={inputRef}
        className={style.searchInput}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onChangeData}
      />
      {value && <img src={close} alt="" className={style.close} onClick={handleClearInput} />}
      <img src={logo} alt="" className={style.logo} />
    </div>
  );
};
export default Search;
