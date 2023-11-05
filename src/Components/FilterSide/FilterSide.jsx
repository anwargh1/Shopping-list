import './filterSide.css';
import { GrClose } from 'react-icons/gr';
import { BsArrowDownSquare } from 'react-icons/bs';
import { BsArrowUpSquare } from 'react-icons/bs';
import { BsSquare } from 'react-icons/bs';
import useFilter from '../../Store/filterContext';

const FilterSide = ({ isOpen, close }) => {
  const { filterByColor, sortByPrice, filterByCategory, clear } = useFilter();

  const handleClose = () => {
    close(false);
  };

  if (isOpen) {
    return (
      <div className="filter-side">
        <div className="filter-header">
          <button className="close-button" onClick={handleClose}>
            <GrClose />
          </button>
        </div>
        <div className="filter-section">
          <h3>By Color</h3>
          <div className="filter-by">
            <p className="by-color" onClick={() => filterByColor('red')}>
              <span className="red"></span>Red
            </p>
            <p className="by-color" onClick={() => filterByColor('wihte')}>
              <span className="wihte"></span>Wihte
            </p>
            <p className="by-color" onClick={() => filterByColor('black')}>
              <span className="black"></span>Black
            </p>
            <p className="by-color" onClick={() => filterByColor('green')}>
              <span className="green"></span>Green
            </p>
            <p className="by-color" onClick={() => filterByColor('blue')}>
              <span className="blue"></span>Blue
            </p>
            <p className="by-color" onClick={() => filterByColor('yellow')}>
              <span className="yellow"></span>Yellow
            </p>
            <p className="by-color" onClick={() => filterByColor('purple')}>
              <span className="purple"></span>Purple
            </p>
            <p className="by-color" onClick={() => filterByColor('orange')}>
              <span className="orange"></span>Orange
            </p>
            <p className="by-color" onClick={() => filterByColor('pink')}>
              <span className="pink"></span>Pink
            </p>
            <p
              className="by-color"
              onClick={() => filterByColor('light_brown')}
            >
              <span className="light-brown"></span>Light brown
            </p>
            <p className="by-color" onClick={() => filterByColor('dark_brown')}>
              <span className="dark-brown"></span>Dark brown
            </p>
            <p className="by-color" onClick={() => filterByColor('beige')}>
              <span className="beige"></span>Beige
            </p>
          </div>
        </div>
        <div className="filter-section">
          <h3>By Price</h3>
          <div className="filter-by">
            <p className="by-price" onClick={() => sortByPrice('lowToHigh')}>
              <BsArrowDownSquare className="low" /> Low
            </p>
            <p className="by-price" onClick={() => sortByPrice('highToLow')}>
              <BsArrowUpSquare className="high" /> High
            </p>
          </div>
        </div>
        <div className="filter-section">
          <h3>By Category</h3>
          <div className="filter-by">
            <p
              className="by-category"
              onClick={() => filterByCategory('dresses')}
            >
              <BsSquare className="square-icon" /> Dresses
            </p>
            <p
              className="by-category"
              onClick={() => filterByCategory('quterwear')}
            >
              <BsSquare className="square-icon" /> Outerwear
            </p>
            <p
              className="by-category"
              onClick={() => filterByCategory('footwear')}
            >
              <BsSquare className="square-icon" /> Footwear
            </p>
            <p className="by-category" onClick={() => filterByCategory('tops')}>
              <BsSquare className="square-icon" /> Tops
            </p>
            <p
              className="by-category"
              onClick={() => filterByCategory('bottoms')}
            >
              <BsSquare className="square-icon" /> Bottoms
            </p>
          </div>
        </div>

        <button className="clear-button" onClick={() => clear()}>
          Clear Filter
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default FilterSide;
