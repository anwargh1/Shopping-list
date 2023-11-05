import './favorite.css';
import useFavorite from '../../Store/favoriteContexi';
import FavoriteItem from '../FavoriteItme/FavoriteItem';

// I will change the class name when I have the time

const Favorite = () => {
  const { products } = useFavorite();

  return (
    <div>
        <div className="bag-top">
             <h3>WISH LIST</h3>
        </div>    
      <div className="display-grid">
        {products ? (
          products.map(p => <FavoriteItem item={p} key={p.id} />)
        ) : (
          <h1>No Item Found</h1>
        )}
      </div>
    </div>
  );
};

export default Favorite;
