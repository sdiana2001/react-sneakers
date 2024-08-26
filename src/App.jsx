import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setsearchValue] = useState('');

  useEffect(() => {
      axios.get('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items').then((res) =>{
        setItems(res.data);
      })
     
      axios.get('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart').then((res) =>{
        setCartItems(res.data);
      })
  }, []);


//функция добавления в корзину
    const onAddToCart = (obj) => {
    const isItemInCart = cartItems.some(item => item.id === obj.id);  // Если в cartItems(корзине) есть товар с таким же id, как у объекта obj(доб-емой карты), то возвращается true. 

    if (isItemInCart) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id));   // Если товар уже есть в корзине, удаляем его
    //Метод filter который создает новый массив, включающий только те элементы, которые удовлетворяют условию.
    }
     else {
      setCartItems(prev => [...prev, obj]);  // Если товара нет в корзине, добавляем его
    }

    axios.post('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart', obj);

  };

  const onRemoveItem = (id)=>{
    setCartItems((prev) => prev.filter(item => item.id !== id));  
  }

  const onChangeSearchInput = (event)=> {
    setsearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove ={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="search" />
            {searchValue && <img className='cu-p clear' onClick={()=> setsearchValue('')} src="/img/icons/remove__btn.svg" alt="Close" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
        {items.filter(item => item.title && item.title.toLowerCase()
        .includes(searchValue.toLowerCase()))
        .map((item) => (
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