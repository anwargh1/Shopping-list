import { createContext, useContext, useReducer } from 'react';
import { favoriteReducer, initialStateFavorite } from './favoriteReducer';

export const FavoriteContext = createContext(initialStateFavorite);

export const FavoriteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favoriteReducer, initialStateFavorite);

      const addToFavorite = (product) => {
          const updatedFavorite= [{ ...product },...state.products];
          console.log(updatedFavorite);
          dispatch({
              type: 'ADD_TO_FAVORITE',
              payload: {
                 products: updatedFavorite,
              },
          });
          
      };
      
      const removeFromFavorite = (product) => {
          const updatedFavorite = state.products.filter(currentProduct => currentProduct.id !== product.id);
          dispatch({
          type: 'REMOVE_FROM_FAVORITE',
          payload: {
              products: updatedFavorite,
          },
          });
      };
  
    const value = {
      products: state.products,
      addToFavorite,
      removeFromFavorite,
    };
  
    return <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  };
  
  const useFavorite = () => {
    const context = useContext(FavoriteContext);
  
    if (context === undefined) {
      throw new Error("useShop must be used within Favorite Context");
    }
  
    return context;
  };
  
  export default useFavorite;