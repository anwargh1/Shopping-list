import './addModel.css';
import { useParams } from 'react-router-dom'
import { IoIosStarOutline } from 'react-icons/io';
import shoppingListData from '../../Data/data';


/* ..... this will be updated ..... */

const AddModel = () => {
  const {productId} =useParams()
  console.log(productId);
  const product = shoppingListData.find(p => p.id == productId)
  console.log(product);

    return (
      <div className="model-background">
        <div className="model-card">
          <img src={product.image} alt={product.title + ' Image'} />
          <div className="model-right-side">
            <div className="product-information">
              <h2>{product.title}</h2>
              <p className="details">Price:{product.price}</p>
              <p className="color">Color:{product.color}</p>
              <p className="category">Category:{product.category}</p>
              <p className="rate">
                <span>
                  <IoIosStarOutline className="icon" /> {product.rating.rate}
                </span>{' '}
                based on {product.rating.count} Reviews
              </p>
              <p className="description">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddModel;
