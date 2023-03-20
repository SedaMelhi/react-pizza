import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = ({ data }) => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const [pizzas, setPizzas] = useState([]);
  const [pizzaLoad, setPizzaLoad] = useState(false);
  const getPizzas = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setPizzaLoad(true);
      });
  };
  useEffect(() => {
    setPizzaLoad(false);
    const order = sort === 'title' ? 'desc' : 'asc';
    getPizzas(
      `https://640ef1d54ed25579dc40e2a6.mockapi.io/items?search=${data}&sortBy=${
        sort.sortProperty
      }&order=${order}&category=${categoryId ? categoryId : ''} `,
    );
    window.scrollTo(0, 0);
  }, [data, categoryId, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
