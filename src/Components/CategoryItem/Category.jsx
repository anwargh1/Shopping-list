import React from 'react';
import './category.css';

const Category = ({ title, icon, filter }) => {
  return (
    <div className="category" onClick={() => filter(title)}>
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default Category;
