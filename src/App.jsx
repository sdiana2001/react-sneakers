import React, { useState, useEffect } from 'react';
import Product from './components/Product';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  

  const onAddToCart = (obj) => {
    // Проверяем, есть ли товар уже в корзине
    const isItemInCart = cartItems.some(item => item.id === obj.id);

    if (isItemInCart) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id));   // Если товар уже есть в корзине, удаляем его
    } else {
      setCartItems(prev => [...prev, obj]);  // Если товара нет в корзине, добавляем его
    }
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              onFavorite={() => console.log('Нажали на сердце')}
              onPlus={() => onAddToCart(item)} // Передаем весь объект товара
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;