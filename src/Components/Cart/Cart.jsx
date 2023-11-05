import React from 'react';
import './cart.css';
import CartItem from '../CartItem/CartItem';
import useShop from '../../Store/shopContext';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Cart = ({ isOpen, close }) => {
  const { products, total } = useShop();

  const handleCloseCart = () => {
    close(false);
  };

  if (isOpen) {
    return (
      <div className={`cart ${isOpen ? 'open' : ''}`}>
        <div className="cart-top">
          <button className="close-cart" onClick={handleCloseCart}>
            <AiOutlineArrowRight />
          </button>
          <h3>MY CART</h3>
        </div>
        <div className="all-cart-item">
          {products.length > 0 ? (
            <div>
              {products.map(p => (
                <CartItem item={p} key={p.id} />
              ))}
              <div className="order">
                <p className="order-summary">ORDER SUMMARY</p>
                <div className="order-details">
                  <p className="total">
                    Total: <span>{'$' + total}</span>
                  </p>
                  <button className="checkout">CHECKOUT</button>
                </div>
              </div>
            </div>
          ) : (
            <p className="no-item">You have no items in your shopping cart.</p>
          )}
        </div>
      </div>
    );
  } else <></>;
};

export default Cart;
