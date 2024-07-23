import 'macro-css';
import Product from './Product/Product';
import {productsArr} from './../src/Product/productsArr';

function App() {
  return (
   <div className="wrapper clear">
    <div style={{display: 'none'}} className="overlay">
    <div className="drawer">
    <h2 className='mb-30' d-flex align-center justify-between >
      Корзина <img src="/img/icons/remove__btn.svg" alt="Remove" />
      </h2>
    <div className="items">
   {/* CARD 1 */}
    <div className="cartItem d-flex align-center mb-20"> 
    <img className='mr-20' width={70} src="/img/products-images/image 5-10.svg" alt="" />
      <div className="mr-20">
      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <b>12 999 руб.</b>
      </div>
      <img className='removeBtn' src="/img/icons/remove__btn.svg" alt="" />
      </div>
 {/* CARD 2 */}
      <div className="cartItem d-flex align-center mb-20"> 
      <img className='mr-20' width={70} src="/img/products-images/image 5-10.svg" alt="" />
      <div className="mr-20">
      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <b>12 999 руб.</b>
      </div>
      <img className='removeBtn' src="/img/icons/remove__btn.svg" alt="" />
      </div>

    </div>

    <div className="cartTotalblock">
      <ul>
        <li>
          <span>Итого: </span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%: </span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className='greenButton'>Оформить заказ <img src="/img/icons/arrow-btn.svg" alt="arrow" />
      </button>
      </div>
      </div>
      </div>

    <header className='d-flex justify-between align-center p-40'>
    <div className='d-flex align-center'>
      <img width={40} height={40} src="/img/icons/logo.svg" />
      <div className='hederInfo'>
        <h3 className='mb-0'>REACT SNEAKERS</h3>
        <p className='opacity-5'>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className='mr-30 d-flex align-center'>
      <img src="img/icons/Сart-icon.svg" />
      <span>1205 руб.</span>
      </li>
      <li className='d-flex align-center'>
     <img src="img/icons/Profile-icon.svg" />
     <span>Профиль</span>
      </li>
    </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
      <h1>Все кроссовки</h1>
      <div className="search-block">
      <img src="/img/icons/search.svg" alt="search" />
      <input placeholder='Поиск...' />
      </div> 
      </div>


      <div className="d-flex">
      {productsArr.map(item => (
        <Product key={item.id} img={item.img} title={item.title}  price={item.price} />
        ))}
</div>
{/* CARD */}
      {/* <div className="card">
        <img width={133} height={112} src="img/products/image 5-10.svg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
            <span>Цена: </span>
            <b>12 999 руб.</b>
          </div>
          <button className='button'>
            <img width={11} src="/img/icons/plus.svg" alt="plus" />
          </button>
        </div>
      </div> */}

    </div>
   </div>
  )

}

export default App;
