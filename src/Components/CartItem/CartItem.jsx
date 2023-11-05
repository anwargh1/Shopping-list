import useShop from '../../Store/shopContext';
import './cartItem.css';
import { GrClose } from 'react-icons/gr';

const CartItem = ({ item }) => {
  const { removeFromCart } = useShop();

  const handelRemove = () => {
    removeFromCart(item);
  };
  return (
    <div className="cart-card">
      {/* <div className="remove-from-cart-card">
            <button onClick={handelRemove}><GrClose /></button>
        </div> */}
      <img src={item.image} alt={item.title + ' Image'} />

      <div className="cart-product-information">
        <p>{item.title}</p>
        <p className="cart-product-price">Price : ${item.price}</p>
        <p className="cart-product-quantity"> Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
