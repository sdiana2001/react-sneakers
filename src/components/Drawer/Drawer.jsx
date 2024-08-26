import  '../../index.scss';

function Drawer({onClose, onRemove,  items = []}) {
    return (
    <div className="overlay">
    <div className="drawer">
    <h2 className='mb-30' d-flex align-center justify-between >
      Корзина <img onClick={onClose} src="/img/icons/remove__btn.svg" alt="Remove" />
      </h2>

      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src="/img/icons/empty-cart.svg" alt="Empty" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button className="greenButton">
        <img src="/img/icons/arrow-btn.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>

    <div className="items">
      {items.map((obj) =>(
 // card
    <div id={obj.id} className="cartItem d-flex align-center mb-20" > 
    <img className='mr-20' width={70} src={obj.img} alt="" />
      <div className="mr-20">
      <p className="mb-5">{obj.title}</p>
      <b>{obj.price}</b>
      </div>
      <img className='removeBtn' onClick={() => onRemove(obj.id)} src="/img/icons/remove__btn.svg" alt="" />
      </div>
      ))}
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
    )
}

export default Drawer;