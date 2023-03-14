import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaLoad, setPizzaLoad] = useState(false);
  const [url, setUrl] = useState({
    address: 'https://640ef1d54ed25579dc40e2a6.mockapi.io/items',
    sortBy: 'rating',
    order: 'desc',
    category: '',
  });
  const getPizzas = (address) => {
    setPizzaLoad(false);
    fetch(address)
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setPizzaLoad(true);
      });
  };
  useEffect(() => {
    getPizzas(`${url.address}?sortBy=${url.sortBy}&order=${url.order}&category=${url.category}`);
    window.scrollTo(0, 0);
  }, [url]);

  const showPizzaByCategory = (category) => {
    const obj = url;
    obj.category = category;
    setUrl({ ...obj });
  };
  const sortPizzas = (category) => {
    const items = ['rating', 'price', 'title'];
    const obj = url;
    obj.sortBy = items[category];
    category === 0 ? (obj.order = 'desc') : (obj.order = 'asc');
    setUrl({ ...obj });
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories showPizzaByCategory={showPizzaByCategory} />
        <Sort sortPizzas={sortPizzas} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaLoad
          ? pizzas.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
          : [...new Array(6)].map((item, i) => <Skeleton key={i} />)}
      </div>
    </div>
  );
};
export default Home;
