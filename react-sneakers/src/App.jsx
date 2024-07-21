import 'macro-css';
import Product from './Product/Product';
import {productsArr} from './../src/Product/productsArr';

function App() {
  return (
   <div className="wrapper clear">
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
      <h1 className='mb-40'>Все кроссовки</h1>
      <div className="d-flex">
      {productsArr.map(item => (
        <Product key={item.id} img={item.img} title={item.title} icon={item.icon} price={item.price} />
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
