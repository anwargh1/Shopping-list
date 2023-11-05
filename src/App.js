import './App.css';
import { ShopProvider } from "./Store/shopContext"
import { FavoriteProvider } from './Store/favoriteContexi';
import { FilterProvider } from './Store/filterContext';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import WishList from './Pages/WishList/WishList';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AddModel from './Components/AddModel/AddModel';
import NavBar from './Components/NavBar/NavBar';
import { OpenCartProvider } from './Store/openCartContext';
import CheckOut from './Components/CheckOut/CheckOut';
function App() {
  return (
    <div>          

    <ShopProvider>
      <FavoriteProvider>
        <FilterProvider>
        <OpenCartProvider>

          <Router>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/wishlist" element={<WishList />} />
              <Route exact path="/checkout" element={<CheckOut />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path='/shop/:productId' element={<AddModel/>}/>

              </Routes>
              </Router>
            </OpenCartProvider>
        </FilterProvider>
      </FavoriteProvider>
    </ShopProvider>          

  </div> 
  );
}

export default App;
