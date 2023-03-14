import { useState } from 'react';
const Categories = ({ showPizzaByCategory }) => {
  const [activeLink, setActiveLink] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setActiveLink(i);
              i == 0 ? showPizzaByCategory('') : showPizzaByCategory(i - 1);
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
