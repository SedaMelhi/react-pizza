import { useEffect, useState } from 'react';
import logo from './../../assets/img/search.svg';
import style from './Search.module.sass';
const Search = ({ searchPizzas }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    searchPizzas(value);
  }, [value]);
  return (
    <div className={style.search}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <img src={logo} alt="" className={style.logo} />
    </div>
  );
};
export default Search;
