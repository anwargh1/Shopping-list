import React from 'react';
import categories from '../../Data/categories';
import './categories.css';
import Category from '../CategoryItem/Category';


// I plan to remove this , but I haven't made a decision yet.
 
const Categories = ({ filter }) => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="flex">
        {categories.map(categorie => (
          <Category
            title={categorie.title}
            icon={categorie.icon}
            key={categorie.id}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
