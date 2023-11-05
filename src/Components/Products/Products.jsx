import React, { useEffect, useState } from 'react';
import './products.css';
import shoppingListData from '../../Data/data';
import ProductCard from '../ProductCard/ProductCard';
import FilterSide from '../FilterSide/FilterSide';
import ReactPaginate from 'react-paginate';
import { GrFilter } from 'react-icons/gr';
import useFilter from '../../Store/filterContext';

const Products = () => {
  const { sort, byColor, byCategory } = useFilter();
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // These are used for ReactPaginate
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [totalItems] = useState(shoppingListData.length);
  const [pageCount] = useState(Math.ceil(totalItems / perPage));

  // getData ---> used to retrieve a subset of data based on 
  // ( sorting, filtering by color, or filtering by category)
  // or a default shopping list if none of these criteria are met
  const getData = () => {
    if (sort && sort.length !== 0) {
      setData(sort.slice(offset, offset + perPage));
    } else if (byColor && byColor.length !== 0) {
      setData(byColor.slice(offset, offset + perPage));
    } else if (byCategory && byCategory.length !== 0) {
      setData(byCategory.slice(offset, offset + perPage));
    } else {
      setData(shoppingListData.slice(offset, offset + perPage));
    }
  };

  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  useEffect(() => {
    getData();
  }, [offset, sort, byColor, byCategory]);

  const handleOpen = () => {
    setIsFilterOpen(true);
  };

  return (
    <div className="products">
      <div className="dropdown-menu">
        <p onClick={handleOpen} className="filter-menu">
          <GrFilter /> Filter Products
        </p>

        <div className={`filter-wrapper ${isFilterOpen ? 'open' : ''}`}>
          <FilterSide isOpen={isFilterOpen} close={setIsFilterOpen} />
        </div>
      </div>

      <div className={`content ${isFilterOpen ? 'filter-open' : ''}`}>
        <div className="display-grid">
          {data.map(product => (
             <ProductCard props={product} key={product.id} />
          ))}
        </div>


        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Products;
