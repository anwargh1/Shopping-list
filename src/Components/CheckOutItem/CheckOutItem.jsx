import React from 'react'
import useShop from '../../Store/shopContext';
import { GrClose } from 'react-icons/gr';
import './checkOutItem.css'
const CheckOutItem = ({item}) => {
  const { removeFromCart } = useShop();

  const handelRemove = (item) => {
    removeFromCart(item);
  };
  return (
    <div className="bag-card">
    <div className='icon-img-bag'>
        <div className="remove-from-bag-card">
            <button onClick={() => handelRemove(item)} data-testid="button"><GrClose /></button>
        </div>
        <img src={item.image} alt={item.title + ' Image'} />
    </div>

    <div className="bag-product-information">
      <p>{item.title}</p>
      <p>{item.category}</p>
      <p>{item.color}</p>
      <p className="bag-product-price">Price : <span>${item.price}</span></p>
      <p className="bag-product-quantity"> Quantity : <span>{item.quantity}</span></p>
      <p className="bag-product-subTotal">SubTotal : <span>${item.price*item.quantity}</span></p>
    </div>
  </div>
  )
}

export default CheckOutItem
