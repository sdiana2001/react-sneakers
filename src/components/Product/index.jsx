import { useState } from 'react';
import ProductStyles from './Product.module.scss';

function Product(props) {
const {img, title, price, onFavorite} = props; // деструктуризация
const [isAdded, setIsAdded]= useState(false);
const [isFavorite, setIsFavorite]= useState(false);

const onClickPlus = ()=>{
  setIsAdded(!isAdded) //инвертируется переменная как при classList.toggle
}

const onClickFavorite = ()=>{
  setIsFavorite(!isFavorite)
}

    return (
        <div className={ProductStyles.card}>
          <div className={ProductStyles.favorite} onClick={onFavorite}>
          <img src={isFavorite ? "/img/icons/heart-Liked.svg" : "/img/icons/heart-Unliked.svg"} onClick={onClickFavorite}  alt="Unliked" />
          </div>
        <img width={133} height={112} src={img} alt="sneakers" />
        <h5>{title}</h5>
        <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price}</b>
          </div>
            <img className={ProductStyles.plus} onClick={onClickPlus} src={isAdded ? '/img/icons/checked.svg' : '/img/icons/plus.svg'}  alt="plus" />
        </div>
      </div>
    )
}

export default Product;