import React, { useEffect, useState } from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import './productCard.css';
import useFavorite from '../../Store/favoriteContexi';
import useShop from '../../Store/shopContext';
import useOpenCart from '../../Store/openCartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ props }) => {
  const [productNumber, setProductNumber] = useState(1);
  const { products, addToFavorite, removeFromFavorite } = useFavorite();
  const [isInFavorite, setIsInFavorite] = useState(false);
  const { addToCart } = useShop();
  const { handleOpenCart } = useOpenCart();

  useEffect(() => {
    const productIsInFavorite = products.find(
      product => product.id === props.id
    );

    if (productIsInFavorite) {
      setIsInFavorite(true);
    } else {
      setIsInFavorite(false);
    }
  }, [products, props.id]);

  const handleIncrees = () => {
    setProductNumber(productNumber => productNumber + 1);
  };

  const handleDecrees = () => {
    setProductNumber(productNumber =>
      productNumber > 1 ? productNumber - 1 : (productNumber = 1)
    );
  };


  const handleClick = () => {
    if (isInFavorite) {
      removeFromFavorite(props);
    } else {
      addToFavorite(props);
    }
  };

  const product = {
    ...props,
    quantity: productNumber,
  };

  const handelAdd = () => {
    addToCart(product);
    handleOpenCart();
  };

  return (
    <div className="card">
      <div className="product-img">
        <Link key={product.id} to={`/shop/${product.id}`}>
          <img src={props.image} alt={props.title + ' Image'} />
        </Link>
      </div>{' '}
      <div className="product-information">
        <p className="rate">
          <span>
            <IoIosStarOutline className="icon" /> {props.rating.rate}
          </span>{' '}
          based on {props.rating.count} Reviews
        </p>
        <p className="price">${props.price}</p>
        <p
          className={isInFavorite ? 'remove-from-wishList' : 'add-to-wishList'}
          isInFavorite={isInFavorite}
          onClick={handleClick}
        >
          {' '}
          {isInFavorite ? 'REMOVE FROM' : 'ADD TO'} WiSHLIST
        </p>
      </div>
      <div className="actions">
        <div className="dec_inc_number">
          <button onClick={handleIncrees}>+</button>
          <span>{productNumber}</span>
          <button onClick={handleDecrees}>-</button>
        </div>
        <div className="add">
          <button onClick={handelAdd} disabled={props.status === 'sold out'}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
