import React from 'react';
import useFavorite from '../../Store/favoriteContexi';
import { IoIosStarOutline } from 'react-icons/io';


// I will update also this 

const FavoriteItem = ({ item }) => {
  const { removeFromFavorite } = useFavorite();

  const handleRemove = () => {
    removeFromFavorite(item);
  };
  return (
    <div className="card">
    <div className="product-img">
      <img src={item.image} alt={item.title + ' Image'} />
    </div>
    <div className="product-information" >
      <p className="rate">
        <span>
          <IoIosStarOutline className="icon" /> {item.rating.rate}
        </span>{' '}
        based on {item.rating.count} Reviews
      </p>
      <p className="price">${item.price}</p>
    </div>
    <div className="actions">
      <div className="add">
        <button onClick={handleRemove} >
          REMOVE
        </button>
      </div>
    </div>
  </div>
  );
};

export default FavoriteItem;
