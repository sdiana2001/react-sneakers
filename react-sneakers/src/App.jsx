import 'macro-css';
import Product from './components/Product';
import {productsArr} from './components/Product/productsArr';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
  return (
   <div className="wrapper clear">
    <Drawer />
    <Header />
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
      <h1>Все кроссовки</h1>
      <div className="search-block">
      <img src="/img/icons/search.svg" alt="search" />
      <input placeholder='Поиск...' />
      </div> 
      </div>
      <div className="d-flex">
 {/* Product */}
          {productsArr.map(obj => (
          <Product key={obj.id}  img={obj.img} title={obj.title}  price={obj.price} />  // пропсы
        ))}

      </div>
      </div>
      </div>
  )

}

export default App;
