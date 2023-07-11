import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext();
function App() {
  const [searchData, setSearchData] = useState('');
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home data={searchData} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
