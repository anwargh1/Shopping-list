import React from 'react';
import './navBar.css';
import useShop from '../../Store/shopContext';
import Cart from '../Cart/Cart';
import useOpenCart from '../../Store/openCartContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { openCart, setOpenCart, handleOpenCart } = useOpenCart();
  const { products } = useShop();
  const productsNumber = products.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="navBar flex">
      <div className="logo flex">
        <img src="../logo-no-background.png" alt="Marka_Shop_logo " />
      </div>

      <div className="right-side flex">
        <ul className="nav-list flex">
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* <Link to='/products'><li>Products</li></Link> */}
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/wishlist">
            <li>Wishlist</li>
          </Link>
          <li onClick={handleOpenCart}>Bag {' ( ' + productsNumber + ' )'}</li>
        </ul>

        <div className="nav-actions flex">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="signup">
            <button className="signup-button">Signup</button>
          </Link>
        </div>
      </div>

      <div className={`cart ${openCart ? 'open' : ''}`}>
        <Cart isOpen={openCart} close={setOpenCart} />
      </div>
    </div>
  );
};

export default NavBar;
