import { createContext, useContext, useReducer } from 'react';
import { shopReducer, initialStateShop } from './shopReducer';

export const ShopContext = createContext(initialStateShop);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialStateShop);
    const addToCart = (product) => {

        // Check if the product is already in the cart
        const productIndex = state.products.findIndex(currProduct => currProduct.id === product.id);
    
        if (productIndex === -1) {
        // If the product is not in the cart, add it
        const updatedCart = [{ ...product },...state.products];
        updatePrice(updatedCart);
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
            products: updatedCart,
            },
        });
        } else {
        // If the product is already in the cart, update its quantity
        const updatedCart = state.products.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
        updatePrice(updatedCart);
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
            products: updatedCart,
            },
        });
        }
    };
    

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(currentProduct => currentProduct.id !== product.id);
        updatePrice(updatedCart);
        dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
            products: updatedCart,
        },
        });
    };

  const updatePrice = (products) => {
    let total = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    // products.forEach(product => (total += product.price * product.quantity));
    dispatch({
      type: 'UPDATE_PRICE',
      payload: { total },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
  
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
