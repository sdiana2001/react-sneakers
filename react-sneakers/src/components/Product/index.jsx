import styles from './Product.module.scss';

function Product(props) {
const {img, title, price} = props;

const oncClickBtn = (a, b) =>{
  console.log(a+b);
}
    return (
        <div className={styles.card}>
          <div className={styles.favorite}>
          <img src="/img/icons/heart-Unliked.svg" alt="Unliked" />
          </div>
        <img width={133} height={112} src={img} alt="sneakers" />
        <h5>{title}</h5>
        <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button className='button' onClick={()=> oncClickBtn(2, 3)}>
            <img width={32} src= '/img/icons/plus.svg' alt="plus" />
          </button>
        </div>
      </div>
    )
}

export default Product;