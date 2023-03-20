import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
const Categories = () => {
  const [activeLink, setActiveLink] = useState(0);
  const dispatch = useDispatch(); //Что бы обновить store необходимо вызвать метод dispatch(). Он вызывается у объекта store который вы создаёте в store.js. (то есть с помощью методов filterSlice я меняю объект состояния, а данные этого объекта передаю через dispatch в хранилище)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              dispatch(setCategoryId(i));
              setActiveLink(i);
            }}
            className={i === activeLink ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
