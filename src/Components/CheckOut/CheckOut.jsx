import React ,{useState}from 'react'
import useShop from '../../Store/shopContext';
import CheckOutItem from '../CheckOutItem/CheckOutItem';
import './checkOut.css'
const CheckOut = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { products, total } = useShop();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', { name, email });
        setEmail("")
        setName("")
      };

  return (
    <div className='shop-bag'>
    <div className="bag-top">
      <h3>SHOPPING BAG</h3>
    </div>
    <div className="all-bag-item" data-testid="all-bag-item">
      {products.length > 0 ? (
        <div className='bag-item-contanir' >
          <div className='bag-item' data-testid="bag-item">
            {products.map(p => (
                <CheckOutItem item={p} key={p.id} />
            ))}
          </div>
          <div className="order-bag" data-testid="order-summary-container">
            <p className="order-summary-bag">ORDER SUMMARY</p>
            <div className="order-details-bag">
            <p className="total-bag">
                    Total: <span>{'$' + total}</span>
            </p>
            <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder='Your Name'
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder='Your Email'
                    />
                  </div>
                    <button type="submit" className="checkout-bag">
                        CHECKOUT
                    </button>
                  </form>
              
            </div>
          </div>
        </div>
      ) : (
        <div className='p-no-item'>
          <p className="no-item-bag">You have no items in your shopping cart.</p>
        </div>

      )}
    </div>
  </div>
  )
}

export default CheckOut
