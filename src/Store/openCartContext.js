import { createContext, useState ,useContext} from 'react';

export const openCartContext = createContext();

export const OpenCartProvider = ({ children }) => {

    const[openCart , setOpenCart] =useState(false)
    const handleOpenCart= () =>{
        setOpenCart(true)
      }

      const value ={
        handleOpenCart,
        setOpenCart,
        openCart
      }
      return <openCartContext.Provider value={value}>
      {children}
    </openCartContext.Provider>

}

const useOpenCart = () => {
    const context = useContext(openCartContext);
  
    if (context === undefined) {
      throw new Error("useOpenCart must be used within openCartContext");
    }
  
    return context;
  };
  
  export default useOpenCart;