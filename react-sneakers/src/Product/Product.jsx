import  '../index.scss';

function Product(props) {
const {img, title, price, icon} = props;
    return (
        <div className="card">
        <img width={133} height={112} src={img} alt="sneakers" />
        <h5>{title}</h5>
        <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button className='button'>
            <img width={11} src= {icon} alt="plus" />
          </button>
        </div>
      </div>
    )
}

export default Product;