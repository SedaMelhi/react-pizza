import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import './scss/app.scss';
//import pizzas from './assets/pizza.json';

function App() {
  const [searchData, setSearchData] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header
          searchPizzas={(data) => {
            setSearchData(data);
          }}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home data={searchData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
