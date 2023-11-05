import { createContext, useContext, useReducer } from 'react';
import { filterReducer, initialStateFilter } from './filterReduser';
import shoppingListData from '../Data/data';

export const FilterContext = createContext(initialStateFilter);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialStateFilter);

        const originalData = shoppingListData;

        const filterByColor = (color) => {
            const filterProducts = originalData.filter(currProduct => currProduct.color === color);
            dispatch({
            type: 'FILTER_BY_COLOR',
            payload: {
                byColor: filterProducts,
            },
            });
        };

        const sortByPrice = (sort) => {
            const sortedProducts = [...originalData]; 
            sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
            dispatch({
            type: 'SORT_BY_PRICE',
            payload: {
                sort: sortedProducts,
            },
            });
        };

        const filterByCategory = (category) => {
            const filterProducts = originalData.filter(currProduct => currProduct.category === category);
            dispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: {
                byCategory: filterProducts,
            },
            });
        };

        const clear = () => {
            dispatch({
              type: 'CLEAR_FILTERS',
            });
          };

  const value = {
    sort: state.sort,
    byColor: state.byColor,
    byCategory: state.byCategory,
    filterByColor,
    sortByPrice,
    filterByCategory,
    clear,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within FilterContext");
  }

  return context;
};

export default useFilter;
