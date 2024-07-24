import  '../../index.scss';

function Header() {
    return (
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
    )
}

export default Header;