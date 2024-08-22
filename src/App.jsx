import React, { useState } from 'react';
import Product from './components/Product';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';


function App() {
  const[items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  /*  Иными словами хуком useEffect мы говорим что данные из сервера должны 
  запрашиваться только один раз при первым  отображении страницы. 
  То есть без этого хука  страница  будет отправлять запрос каждый раз при рендеринге  */

   React.useEffect(()=> {   //  useEffect для выполнения побочных эффектов
   fetch('https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items')
  .then((response) =>{
  return response.json(); // json() для преобразования ответа в формат JSON. Это асинхронная операция, поэтому она возвращает промис. 
  })
  .then((json) => {
    setItems(json); // функция setItems(json) вызывается и обновляет состояние items новыми данными, которые пришли с сервера.
  }); 
}, []);


  return (
   <div className="wrapper clear">
{/* Drawer */}    
    {cartOpened && <Drawer onClose={()=> setCartOpened(false)} />}  {/* Если значение cartOpened положительное => выполни следующее */}
{/* Header */}  
    <Header onClickCart={()=> setCartOpened(true)} />

    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
      <h1>Все кроссовки</h1>
      <div className="search-block">
      <img src="/img/icons/search.svg" alt="search" />
      <input placeholder='Поиск...' />
      </div> 
      </div>
      <div className="d-flex flex-wrap">
 {/* Product */}
          {items.map(obj => (
          <Product key={obj.id}  
          img={obj.img} 
          title={obj.title}  
          price={obj.price}
          onFavorite={() => console.log('Нажали на сердце')}
          onPlus={() => console.log('Нажали на плюс')}
           />  // пропсы
        ))}

      </div>
      </div>
      </div>
  )
  

}

export default App;
